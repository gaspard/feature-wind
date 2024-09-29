---
layout: article.liquid
title: Rosen Exercises 1.2
tags: article
date: 2024-05-14
id: rosen-ex-1.2
summary: Solutions to exercises 1.2
---

# Rosen exercises 1.2

#### Applications of Propositional Logic

Notes and solutions for Chapter 1.2 of {% bib "Rosen 2012" %}.

In this article, I will be using $\T$ for true and $\F$ for false as these signs help spot patterns more easily then the regular $T$ and $F$ for people like me who can confuse these two letters.

Some of these exercises have solved with Prolog (see {% link 'sudoku-solver' %} for details on Prolog and how to run these code snippets in [Ciao](https://ciao-lang.org/playground/index.html).)

## Knights and Knaves

A and B are either knights (always telling the truth) or knaves (always lying). We use $A$ to express "A is a knight" (and $\lnot A$) to say that $A$ is not a knight (s/he is a knave). Same for $B$.

### 19

> A says "At least one of us is a knave" and B says nothing.

```prolog
% For this first sample code, we will add the full preamble. It will
% should be added in all other examples.
% -- PREAMBLE
false :- fail.
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
% -- END PREAMBLE

ex19(Ks) :-
  Ks = [A,B],
  A => (~A; ~B).

% Query (to be run in the query window)
?- ex19(Ks).
```

$$
\begin{align*}
p: & \underbrace{A}_{\text{if A is a knight}} \to &
\underbrace{\lnot A \lor \lnot B}_{\text{s/he says the truth}} \\
q: & \underbrace{\lnot A}_{\text{if A is a knave}} \to &
\underbrace{A \land B}_{\text{s/he always lies}} \\
\end{align*}
$$

$$
\begin{array}{|c c|c c c|c c c|c|}
A & B &
A & \to & \lnot A \lor \lnot B &
\lnot A & \to & A \land B &
p \land q \\
\hline
\T & \T & \T & \F & \F & \F & \T & \T & \F \\
\T & \F & \T & \T & \T & \F & \T & \F & \T \\
\F & \T & \F & \T & \T & \T & \F & \F & \F \\
\F & \F & \F & \T & \T & \T & \F & \F & \F \\
\end{array}
$$

The statement and its corollary deduced from what A says have only one solution: A is a knight and B is a knave.

### 21

> A says "I am a knave or B is a knight" and B says nothing.

$$
\begin{align*}
p: & \underbrace{A}_{\text{if A is a knight}} \to &
\underbrace{\lnot A \lor B}_{\text{s/he says the truth}} \\
q: & \underbrace{\lnot A}_{\text{if A is a knave}} \to &
\underbrace{A \land \lnot B}_{\text{s/he always lies}} \\
\end{align*}
$$

$$
\begin{array}{|c c|c c c|c c c|c|}
A & B &
A & \to & \lnot A \lor B &
\lnot A & \to & A \land \lnot B &
p \land q \\
\hline
\T & \T & \T & \T & \T & \F & \T & \F & \T \\
\T & \F & \T & \F & \F & \F & \T & \T & \F \\
\F & \T & \F & \T & \T & \T & \F & \F & \F \\
\F & \F & \F & \T & \T & \T & \F & \F & \F \\
\end{array}
$$

The statement and it's corollary deduced from what A says have only one solution: A and B are knights.

### 23

> A says "We are both knaves" and B says nothing.

$$
\begin{align*}
\underbrace{A}_{\text{if A is a knight}} & \to
\underbrace{\lnot A \land \lnot B}_{\text{s/he says the truth}} \\
\underbrace{\lnot A}_{\text{if A is a knave}} & \to
\underbrace{A \lor B}_{\text{s/he always lies}} \\
\end{align*}
$$

$$
\begin{array}{|c c|c c c|c c c|c|}
A & B &
A & \to & \lnot A \land \lnot B &
\lnot A & \to & A \lor B &
p \land q \\
\hline
\T & \T & \T & \F & \F & \F & \T & \T & \F \\
\T & \F & \T & \F & \F & \F & \T & \T & \F \\
\F & \T & \F & \T & \F & \T & \T & \T & \T \\
\F & \F & \F & \T & \T & \T & \F & \F & \F \\
\end{array}
$$

The statement and it's corollary have only one solution: A is a knave (s/he lies) and B is a knight.

## Knights, Knaves, ... and Spies

A and B are either knights (always telling the truth), knaves (always lying) or Spies (who can either lie or tell the truth). Out of three people (A, B, and C), you know that one is a knight ($Xk$), one is a knave ($Xa$) and one is a Spy ($Xs$). Each of the three people knows the type of person each of the other two is.

### 25

> A says "I am the knight" ($p$), B says "I am the knave" ($q$), and C says "B is the knight" ($r$).

In the equations, we will ignore the fact that there can be only one knight, knave and spy. This fact will be implemented by filtering the models in truth tables. We will use $k$ for knight, $a$ for knave and $s$ for spy. When we write $Xi$ it means that the person (variable) $X$ is assigned the value $i$. For example $Ak$ means that "A is a knight".

Note that the cases when the speaker is a spy are not listed because they do not increase our knowledge: they are tautologies:

$$
\begin{array}{|c c|c c c|}
Xs &
p &
Xs & \to & p \lor \lnot p \\
\hline
\T & \T & \T & \T & \T \\
\T & \F & \T & \T & \T \\
\F & \T & \F & \T & \T \\
\F & \F & \F & \T & \T \\
\end{array}
$$

Here are the statements of the problem expressed with logical operators:

$$
\begin{align*}
p: &\\
& (Ak \to  Ak)\ & \land \\
& (Aa \to  \lnot Ak) \\
q: & \\
& (Bk \to  Ba)\ & \land \\
& (Ba \to  \lnot Ba) \\
r: & \\
& (Ck \to  Bk)\ & \land \\
& (Ca \to  \lnot Bk)
\end{align*}
$$

This can be written down in the following truth tables.

$$
\begin{align*}
p: &
\begin{array}{|c c c|c c c|c|c c c|}
A & B & C & Ak & \to & Ak & \land & Aa & \to & \lnot Ak \\
k & a & s & \T & \T & \T & \T & \F & \T & \F \\
k & s & a & \T & \T & \T & \T & \F & \T & \F \\
a & k & s & \F & \T & \F & \T & \T & \T & \T \\
a & s & k & \F & \T & \F & \T & \T & \T & \T \\
s & k & a & \F & \T & \F & \T & \F & \T & \T \\
s & a & k & \F & \T & \F & \T & \F & \T & \T \\
\end{array} \\
q: &
\begin{array}{|c c c|c c c|c|c c c|}
A & B & C & Bk & \to & Ba & \land & Ba & \to & \lnot Ba \\
k & a & s & \F & \T & \T & \F & \T & \F & \F \\
k & s & a & \F & \T & \F & \T & \F & \T & \T \\
a & k & s & \T & \F & \F & \F & \F & \T & \T \\
a & s & k & \F & \T & \F & \T & \F & \T & \T \\
s & k & a & \T & \F & \F & \F & \F & \T & \T \\
s & a & k & \F & \T & \T & \F & \T & \F & \F \\
\end{array} \\
r: &
\begin{array}{|c c c|c c c|c|c c c|}
A & B & C & Ck & \to & Bk & \land & Ca & \to & \lnot Bk \\
k & a & s & \F & \T & \F & \T & \F & \T & \T \\
k & s & a & \F & \T & \F & \T & \T & \T & \T \\
a & k & s & \F & \T & \T & \T & \F & \T & \F \\
a & s & k & \T & \F & \F & \F & \F & \T & \T \\
s & k & a & \F & \T & \T & \F & \T & \F & \F \\
s & a & k & \T & \F & \F & \F & \F & \T & \T \\
\end{array} \\
p \land q \land r: &
\begin{array}{|c c c|c|c|c||c|}
A & B & C & p & q & r & p \land q \land r \\
k & a & s & \T & \F & \T & \F \\
k & s & a & \T & \T & \T & \T \\
a & k & s & \T & \F & \T & \F \\
a & s & k & \T & \T & \F & \F \\
s & k & a & \T & \F & \F & \F \\
s & a & k & \T & \F & \F & \F \\
\end{array}
\end{align*}
$$

As we can see, the statement $p$ is a tautology and does not restrict who the people may be. From tables $q$ and $r$, we can see that the only solution is:

- Ak, Bs, Ca: A is a knight, B is a spy and C the knave.

Looking back to our statements:

> A says "I am the knight", B says "I am the knave", and C says "B is the knight".

Let's verify if our result stands:

- A says that they are the knight, which is true and expected from a noble knight.
- B says that they are the knave, which is false, but it's expected from a spy to say whatever.
- C says that B is the knight, which is false, and that is what is expected from an awful knave: to always lie.

### 27

> A says "I am the knight" ($p$), B says "A is telling the truth" ($q$), and C says "I am the spy" ($r$).

Please read the introductory notes on exercise 26 as they also apply here.

The first statement $p$ is a tautology (see ex. 26) so we will ignore it here.

Here are the other statements of the problem expressed with logical operators:

$$
\begin{align*}
q: & \\
& (Bk \to  Ak)\ & \land \\
& (Ba \to  \lnot Ak) \\
r: & \\
& (Ck \to  Cs)\ & \land \\
& (Ca \to  \lnot Cs)
\end{align*}
$$

This can be written down in the following truth tables.

$$
\begin{align*}
q: &
\begin{array}{|c c c|c c c|c|c c c|}
A & B & C & Bk & \to & Ak & \land & Ba & \to & \lnot Ak \\
k & a & s & \F & \T & \T & \F & \T & \F & \F \\
k & s & a & \F & \T & \T & \T & \F & \T & \F \\
a & k & s & \T & \F & \F & \F & \F & \T & \T \\
a & s & k & \F & \T & \F & \T & \F & \T & \T \\
s & k & a & \T & \F & \F & \F & \F & \T & \T \\
s & a & k & \F & \T & \F & \T & \T & \T & \T \\
\end{array} \\
r: &
\begin{array}{|c c c|c c c|c|c c c|}
A & B & C & Ck & \to & Cs & \land & Ca & \to & \lnot Cs \\
k & a & s & \F & \T & \T & \T & \F & \T & \F \\
k & s & a & \F & \T & \F & \T & \T & \T & \T \\
a & k & s & \F & \T & \T & \T & \F & \T & \F \\
a & s & k & \T & \F & \F & \F & \F & \T & \T \\
s & k & a & \F & \T & \F & \T & \T & \T & \T \\
s & a & k & \T & \F & \F & \F & \F & \T & \T \\
\end{array} \\
p \land q \land r: &
\begin{array}{|c c c|c|c|c||c|}
A & B & C & p & q & r & p \land q \land r \\
k & a & s & \T & \F & \T & \F \\
k & s & a & \T & \T & \T & \T \\
a & k & s & \T & \F & \T & \F \\
a & s & k & \T & \T & \F & \F \\
s & k & a & \T & \F & \T & \F \\
s & a & k & \T & \T & \F & \F \\
\end{array}
\end{align*}
$$

Our unique solution is thus:

- Ak, Bs, Ca: A is a knight, B is a spy and C the knave.

Looking back to our statements:

> A says "I am the knight", B says "A is telling the truth", and C says "I am the spy".

Let's verify if our result stands:

- A says that they are the knight, which is true and expected from a kight.
- B says that A is telling the truth, which is true and it is expected from a spy to sometimes say the truth (to save their a.. from complicated situations). All good.
- C says that they are a spy, which is a lie and expected from a knave.

### 29

> A says "I am the knight" ($p$), B says "I am the knight" ($q$), and C says "I am the kight" ($r$).

$$
\begin{align*}
p: & \\
& (Ak \to  Ak)\ & \land \\
& (Aa \to  \lnot Ak) \\
q: & \\
& (Bk \to  Bk)\ & \land \\
& (Ba \to  \lnot Bk) \\
r: & \\
& (Ck \to  Ck)\ & \land \\
& (Ca \to  \lnot Ck)
\end{align*}
$$

These three statements are all tautologies, thus the permutations of knight, knave and spy between the people A, B and C are all solutions.

### 31

> A says "I am not the spy" ($p$), B says "I am not the spy" ($q$), and C says "I am not the spy" ($r$).

$$
\begin{align*}
p: & \\
& (Ak \to  \lnot As)\ & \land \\
& (Aa \to  As) \\
q: & \\
& (Bk \to  \lnot Bs)\ & \land \\
& (Ba \to  Bs) \\
r: & \\
& (Ck \to  \lnot Cs)\ & \land \\
& (Ca \to  Cs) \\
\end{align*}
$$

$$
p:
\begin{array}{|c|c c c|c|c c c|}
A & Ak & \to & \lnot As & \land & Aa & \to & As \\
k & \T & \T & \T & \T & \F & \T & \F \\
a & \F & \T & \T & \F & \T & \F & \F \\
s & \F & \T & \F & \T & \F & \T & \T \\
\end{array}
$$

The same table holds for $q$ and $r$ which means that anyone can be knight or spy but nobody can be a knave. This problem has no solutions.

## 33

Three coworkers, Fred, Janice and Maggie. How are their salaries related ? This is an ordering problem and we will solve it by assigning numbers to F, J and M, the higher the number, the better the pay. For example, $F_1$ means that Fred is the lowest paid of the three, $F_3$ would mean that s/he is the most paid.

> If Fred is not the highest paid of the three, then Janice is:

$$
p: \lnot F_3 \to J_3
$$

> If Janice is not the lowest paid, then Maggie is paid the most:

$$
q: \lnot J_1 \to M_3
$$

$$
\begin{array}{|c c c|c c c|c|c c c|}
F & J & M & \lnot F_3 & \to & J_3 & \land & \lnot J_1 & \to & M_3 \\
3 & 2 & 1 & \F & \T & \F & \F & \T & \F & \F \\
3 & 1 & 2 & \F & \T & \F & \T & \F & \T & \F \\
2 & 3 & 1 & \T & \T & \T & \F & \T & \F & \F \\
2 & 1 & 3 & \T & \F & \F & \F & \F & \T & \T \\
1 & 3 & 2 & \T & \T & \T & \F & \T & \F & \F \\
1 & 2 & 3 & \T & \F & \F & \F & \T & \T & \T \\
\end{array}
$$

The solution is thus: $J_1$, $M_2$, and $F_3$. This means that Fred has the highest salary, then Maggie, and Janice has the lowest.

We can very with the initial statements:

- $p$: Fred is the highest paid (so Janice doesn't have to be highest).
- $q$: Janice is the lowest paid, so Maggie doesn't have to be highest.

## 35

> $p$: If the Butler is telling the truth, so is the Cook.

$$
p: \ B \to C
$$

> $q$: The Cook and the Gardener cannot both be telling the truth.

$$
q: \ \lnot (C \land G)
$$

> $r$: The Gardener and the Handyman are not both lying.

$$
r: \ (G \lor H)
$$

> $s$: If the Handyman is telling the truth then the Cook is lying.

$$
s: \ H \to \lnot C
$$

$$
\begin{array}{|c c c c|c c c c|c|}
B & C & G & H & p & q & r & s & \bigcap \\
\T & \T & \T & \T & \T & \F & \T & \F & \F \\
\T & \T & \T & \F & \T & \F & \T & \T & \F \\
\T & \T & \F & \T & \T & \T & \T & \F & \F \\
\T & \T & \F & \F & \T & \T & \F & \T & \F \\
\T & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \F & \T & \F & \F & \T & \T & \T & \F \\
\T & \F & \F & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \F & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \T & \F & \T & \F & \F \\
\F & \T & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \F & \T & \T & \T & \T & \F & \F \\
\F & \T & \F & \F & \T & \T & \F & \T & \F \\
\F & \F & \T & \T & \T & \T & \T & \T & \T \\
\F & \F & \T & \F & \T & \T & \T & \T & \T \\
\F & \F & \F & \T & \T & \T & \T & \T & \T \\
\F & \F & \F & \F & \T & \T & \F & \T & \F \\
\end{array}
$$

From this table, we can see that the Butler and Cook are lying. The Gardener and the Handyman could be both telling the truth or one of the Gardener or the Handyman but not both could also be lying.

## 37

Let's use truth value to mean "lady in room".

> $p$: On door of room A the sign says "In this room, there is a lady, and in the other one, there is a tiger"

$$
p: \ A \land \lnot B
$$

> $q$: "In one of these rooms, there is a lady, and in one of them there is a tiger".

$$
q: \ A \underbrace{\oplus}_{\text{exclusive or}} B
$$

> $r$: "One of these signs is true and the other is false".

$$
r: \ p \oplus q
$$

If $p$ is true, then $q$ must be false, but it is also true. So $p$ must be false and $q$ true. The lady (not eaten by the tiger) is thus in the second room.

Solving with a truth table:

$$
\begin{array}{|c c|c|c|c|}
A & B & A \land \lnot B & A \oplus B & p \oplus q \\
\T & \T & \F & \F & \F \\
\T & \F & \T & \T & \F \\
\F & \T & \F & \T & \T \\
\F & \F & \F & \F & \F \\
\end{array}
$$

As we see, B is true (the lady is in room B) and A is false (the tiger is in A).
