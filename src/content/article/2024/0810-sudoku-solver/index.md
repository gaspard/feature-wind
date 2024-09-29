---
layout: article.liquid
tags: article
title: Solving a Sudoku with Prolog
date: 2024-06-10
id: sudoku-solver
summary: Some experiences in Constraint Programming
---

# Solving a Sudoku with Prolog

All the code samples in this article have been solved with: [Ciao](https://ciao-lang.org/playground/).

#### Modeling Sudoku's Constraints

Let $p(i, j, n)$ denote the proposition that $n$ is in the cell in the $i$th row and $j$th column.

##### Every row contains every number

$$
\bigwedge_{i=1}^9\bigwedge_{n=1}^9\bigvee_{j=1}^9 p(i,j,n)
$$

For this, we fix $i$ (the row), then $n$ (one of the numbers from $1..9$) and then go through every column $j$ as a possible (or) place for this number's cells.

For the first row:

$$
\begin{align*}
& \bigwedge_{n=1}^9\bigvee_{j=1}^9 p(1,j,n) \equiv \\
& (p(1,1,1) \lor p(1,2,1) \lor ... \lor p(1,9,1))\ \land \\
& (p(1,1,2) \lor p(1,2,2) \lor ... \lor p(1,9,2))\ \land \\
& \vdots \\
& (p(1,1,9) \lor p(1,2,9) \lor ... \lor p(1,9,9))
\end{align*}
$$

Note that this _does not assert_ that cells can only contain one number. Just that every number is visible on every row.

##### Every column contains every number

In a similar way as with rows, we lock column first, then the number we want, then assign the number to a cell by going through every row:

$$
\bigwedge_{j=1}^9\bigwedge_{n=1}^9\bigvee_{i=1}^9 p(i,j,n)
$$

##### Every 3x3 block contains every number

For this, we first go through every row block with variable $r$ then every column block with $s$. This locates a unique block. Multiplying these variables by 3 jumps from block to block. Assigning $(0,0)$ to $(r,s)$ locates the top-left block, $(1,0)$ the first block on the second row, etc. After fixing the number $n$, the last part goes through every cell of the block.

$$
\bigwedge_{r=0}^2
\bigwedge_{s=0}^2
\bigwedge_{n=1}^9
\bigvee_{i=1}^3
\bigvee_{j=1}^3
p(3r + i,3s + j,n)
$$

##### No cell contains more than one number

The rule states that for each $n$, if $p(i, j, n)$ holds, then
$p(i, j, n')$ is false for all other numbers, thus implying that
there is just one number in each cell.

$$
\forall n \in \{1,...,9\}, \forall n' \in \{1,...,9\} \land n' \neq n, \bigwedge_{i=1}^9\bigwedge_{j=1}^9 p(i, j, n) \to \lnot p(i, j, n')
$$

## Prolog

To solve this problem, Let's explore Prolog with these [slides on Prolog](https://cliplab.org/~logalg/slides/2_logic_programming.pdf).

#### Special Symbols

| Symbol/Term | Meaning                            | Equivalent |
| ----------- | :--------------------------------- | :--------: |
| `:-`        | **if** (or **neck**)               |  $\gets$   |
| `,`         | **and**                            |  $\land$   |
| `;`         | **or**                             |   $\lor$   |
| `\+`        | **not**                            |  $\lnot$   |
| `.`         | end of statement                   |            |
| `!`         | cut (do to backtrack: stop search) |            |
| `_`         | anonymous variable                 |            |

#### Special Terms

| Term   | Meaning             |
| ------ | :------------------ |
| `true` | $\T$ (true)         |
| `fail` | $\F$ (false, abort) |

#### Syntax

| Term              | Type                |
| :---------------- | :------------------ |
| `Foo`             | **variable**        |
| `foo`             | **constant**        |
| `'some name'`     | quoted **constant** |
| `son(parvati, X)` | **structure**       |

A **structure** is made of a **functor** (the structure name) with arguments in parenthesis. Arguments can be constants or variables.

The language uses `name/arity` to identify functors. A constant is
a functor with arity `0`.

| Term              | Type      | Main Functor |
| :---------------- | :-------- | :----------: |
| `parvati`         | constant  |  parvati/0   |
| `son(parvati, X)` | structure |    son/2     |
| `X`               | variable  |      --      |

Functors can be defined as _prefix_, _postfix_, or _infix_:

| Term               | Equivalent         |                 Type                 |
| :----------------- | :----------------- | :----------------------------------: |
| `a + b`            | '+'(a,b)           |  `'+'/2` declared as _infix_ (xfx)   |
| `- b`              | '-'(b)             |  `'-'/1` declared as _prefix_ (fx)   |
| `anna mother mary` | mother(anna, mary) | `mother/2` declared as _infix_ (xfx) |

- A variable is **free** if it has not been assigned a value yet.
- A term is **ground** (set) if it contains no free variables.

#### Rules and Facts

| Notation        | Type     |
| :-------------- | :------- |
| `head :- body.` | **Rule** |
| `head.`         | **Fact** |

- A **Fact** is a rule without a body (it has no condition), or `true` as body: `p.` is the same as `p :- true.`.
- The **body** of a rule can contain multiple terms (also called procedure calls) separated by `,` (and):

```prolog
q :- p1, ..., pn
```

Represents:

$$
q \gets p_1 \land \dots \land p_n
$$

Or the statement: **if** p1 and ... and pn **then** q. For example:

```prolog
% People are happy when dancing and not drunk.
dancing(marco).
dancing(lily).
drunk(marco).
% People are happy when dancing and not drunk.
happy(Person) :- dancing(Person), \+ drunk(Person).
```

This program (a set of rules and facts) can be queried with:

```prolog
% Query:
?- happy(lily).

yes
?- happy(gina).

no
?- happy(marco).

no
?-
```

#### Propositional Logic

Let's now re-create the operators to let us write our constraints in
a way we are used to:

```prolog
% true is already defined
false :- fail.
% - first argument is precedence, smallest is
% evaluated first.
% - second argument is "shape", f = operator.
% - last argument is the symbol to use.
:- op(400,fx,~).
:- op(500,xfx,^).
:- op(500,xfx,v).
:- op(600,xfx,=>).
:- op(600,xfx,<=>).

~P :- \+ P.
P ^ Q :- P, Q, !.
P v Q :- (P; Q), !.
P => Q :- (\+ P; Q), !.
P <=> Q :- ((P, Q, !); (\+ P, \+ Q, !)), !.
```

For the subsequent code, it will be assumed that this preamble has been included.

### Blue Sky

What makes a blue sky?

```prolog
% Head       :- Body
% Consequent :- Antecedent

% It is cloudy if it rains becomes:
cloudy :- rains.

% It feels dark if it is cloudy or evening:
dark :- cloudy;evening.

% The sky is blue if it is not evening
% and not cloudy:
blue_sky :- not(evening),not(cloudy).
```

### Rosen Exercises (with Prolog)

Check the prolog code along {% link 'rosen-ex-1.2' %}.

To go further: [triska/clpb](https://github.com/triska/clpb) has some amazing resources on contraint programming problems.
