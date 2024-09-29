---
layout: article.liquid
tags: article
title: Rosen Notes 1.3
date: 2024-05-15
id: rosen-1.3
summary: Notes on Rosen 2012, chapter 1.3
---

# Propositional Equivalences

Notes on {% bib "rosen 2012" %}, chapter 1.3.

## Logical Equivalence

Two statement $a$ and $b$ are logically equivalent if $a \leftrightarrow b$ is a tautology, i.e they have the same truth values for all models. This equivalence of the two statements can be written as $a \equiv b$.

As an example, let me use a truth table to show that $p$ and $\lnot (\lnot p)$ are equivalent:

$$
\begin{array}{}
\lnot & ( \lnot & p ) \\
\hline
\hT & \F & \hT \\
\hF & \T & \hF \\
\end{array}
$$

As seen above, for all models (rows), the values for $\lnot(\lnot p)$ and $p$ are the same, thus proving the equivalence.

##### Idempotent laws<a name="equiv-idempotent"></a>

$$
\begin{array}{}
p \lor p & \equiv & p \land p & \equiv & p \\
\hline
\hT & & \T & & \hT \\
\hF & & \F & & \hF \\
\end{array}
$$

##### Double negation law<a name="equiv-double-negation"></a>

$$
\begin{array}{}
\lnot &  \lnot & p \\
\hline
\hT & \F & \hT \\
\hF & \T & \hF \\
\end{array}
$$

##### Identity Laws<a name="equiv-identity"></a>

$$
\begin{array}{}
p & \lor  & \bold{F} & \equiv & p \\
\T & \hT & \F && \hT \\
\F & \hF & \F && \hF \\
\hline
p & \land & \bold{T} & \equiv & p \\
\T & \hT & \T && \hT \\
\F & \hF & \T && \hF \\
\end{array}
$$

##### Domination Laws<a name="equiv-domination"></a>

$$
\begin{array}{}
p & \lor & \bold{T} & \equiv & \bold{T} \\
\hline
\T & \hT & \T && \hT \\
\F & \hT & \T && \hT \\
\end{array}
$$

$$
\begin{array}{}
p & \land & \bold{F} & \equiv & \bold{F} \\
\hline
\T & \hF & \F && \hF \\
\F & \hF & \F && \hF \\
\end{array}
$$

##### Negation laws<a name="equiv-negation"></a>

$$
\begin{array}{}
p & \lor & \lnot p & \equiv & \bold{T} \\
\hline
\T & \hT & \F && \hT \\
\F & \hT & \T && \hT \\
\end{array}
$$

$$
\begin{array}{}
p & \land & \lnot p & \equiv & \bold{F} \\
\hline
\T & \hF & \F && \hF \\
\F & \hF & \T && \hF \\
\end{array}
$$

##### Commutative laws<a name="equiv-commutative"></a>

$$
\begin{array}{}
p & \lor & q & \equiv & q & \lor & p \\
\hline
\T & \hT & \T && \T & \hT & \T \\
\T & \hT & \F && \F & \hT & \T \\
\F & \hT & \T && \T & \hT & \F \\
\F & \hF & \F && \F & \hF & \F \\
\end{array}
$$

$$
\begin{array}{}
p & \land & q & \equiv & q & \land & p \\
\hline
\T & \hT & \T && \T & \hT & \T \\
\T & \hF & \F && \F & \hF & \T \\
\F & \hF & \T && \T & \hF & \F \\
\F & \hF & \F && \F & \hF & \F \\
\end{array}
$$

##### Associative laws<a name="equiv-associative"></a>

$$
\begin{array}{}
(p & \lor & q) & \lor & r & \equiv & p & \lor & (q & \lor & r) \\
\hline
\T & \T & \T & \hT & \T && \T & \hT & \T & \T & \T \\
\T & \T & \T & \hT & \F && \T & \hT & \T & \T & \F \\
\T & \T & \F & \hT & \T && \T & \hT & \F & \T & \T \\
\T & \T & \F & \hT & \F && \T & \hT & \F & \F & \F \\
\F & \T & \T & \hT & \T && \F & \hT & \T & \T & \T \\
\F & \T & \T & \hT & \F && \F & \hT & \T & \T & \F \\
\F & \F & \F & \hT & \T && \F & \hT & \F & \T & \T \\
\F & \F & \F & \hF & \F && \F & \hF & \F & \F & \F \\
\end{array}
$$

##### Distributive laws<a name="equiv-distributive"></a>

$$
\begin{array}{}
p & \lor & (q & \land & r) & \equiv & (p & \lor & q) & \land & (p & \lor & r) \\
\hline
\T & \hT & \T & \T & \T && \T & \T & \T & \hT & \T & \T & \T \\
\T & \hT & \T & \F & \F && \T & \T & \T & \hT & \T & \T & \F \\
\T & \hT & \F & \F & \T && \T & \T & \F & \hT & \T & \T & \T \\
\T & \hT & \F & \F & \F && \T & \T & \F & \hT & \T & \T & \F \\
\F & \hT & \T & \T & \T && \F & \T & \T & \hT & \F & \T & \T \\
\F & \hF & \T & \F & \F && \F & \F & \T & \hF & \F & \F & \F \\
\F & \hF & \F & \F & \T && \F & \F & \F & \hF & \F & \T & \T \\
\F & \hF & \F & \F & \F && \F & \F & \F & \hF & \F & \F & \F \\
\end{array}
$$

$$
\begin{array}{}
p & \land & (q & \lor & r) & \equiv & (p & \land & q) & \lor & (p & \land & r) \\
\hline
\T & \hT & \T & \T & \T && \T & \T & \T & \hT & \T & \T & \T \\
\T & \hT & \T & \T & \F && \T & \T & \T & \hT & \T & \F & \F \\
\T & \hT & \F & \T & \T && \T & \F & \F & \hT & \T & \T & \T \\
\T & \hF & \F & \F & \F && \T & \F & \F & \hF & \T & \F & \F \\
\F & \hF & \T & \T & \T && \F & \F & \T & \hF & \F & \F & \T \\
\F & \hF & \T & \T & \F && \F & \F & \T & \hF & \F & \F & \F \\
\F & \hF & \F & \T & \T && \F & \F & \F & \hF & \F & \F & \T \\
\F & \hF & \F & \F & \F && \F & \F & \F & \hF & \F & \F & \F \\
\end{array}
$$

##### De Morgan's Laws<a name="equiv-morgan"></a>

$$
\begin{array}{}
\lnot & (p & \land & q) & \equiv & \lnot p & \lor & \lnot q \\
\hline
\hF & \T & \T & \T && \F & \hF & \F \\
\hT & \T & \F & \F && \F & \hT & \T \\
\hT & \F & \F & \T && \T & \hT & \F \\
\hT & \F & \F & \F && \T & \hT & \T \\
\end{array}
$$

$$
\begin{array}{}
\lnot & (p & \lor & q) & \equiv & \lnot p & \land & \lnot q \\
\hline
\hF & \T & \T & \T && \F & \hF & \F \\
\hF & \T & \T & \F && \F & \hF & \T \\
\hF & \F & \T & \T && \T & \hF & \F \\
\hT & \F & \F & \F && \T & \hT & \T \\
\end{array}
$$

Can also be expressed as:

$$
\begin{align*}
\lnot \bigwedge_{i=1}^n p_i & \equiv \bigvee_{i=1}^n \lnot p_i & \equiv \lnot p_1 \lor \lnot p_2 \lor ... \lor p_n \\
\lnot \bigvee_{i=1}^n p_i & \equiv \bigwedge_{i=1}^n \lnot p_i
\end{align*}
$$

##### Absorption laws<a name="equiv-absorption"></a>

$$
\begin{array}{}
p & \lor & (p & \land & q) & \equiv & p \\
\hline
\T & \hT & \T & \T & \T && \hT \\
\T & \hT & \T & \F & \F && \hT \\
\F & \hF & \F & \F & \T && \hF \\
\F & \hF & \F & \F & \F && \hF \\
\end{array}
$$

$$
\begin{array}{}
p & \land & (p & \lor & q) & \equiv & p \\
\hline
\T & \hT & \T & \T & \T && \hT \\
\T & \hT & \T & \T & \F && \hT \\
\F & \hF & \F & \T & \T && \hF \\
\F & \hF & \F & \F & \F && \hF \\
\end{array}
$$

##### Logical equivalences involving conditional statements<a name="equiv-conditionals"></a>

$$
\begin{array}{}
p & \to & q & \equiv & \lnot p & \lor & q \\
\hline
\T & \hT & \T && \F & \hT & \T \\
\T & \hF & \F && \F & \hF & \F \\
\F & \hT & \T && \T & \hT & \T \\
\F & \hT & \F && \T & \hT & \F \\
\end{array}
$$

$$
\lighttext{contrapositive} \\
\begin{array}{}
p & \to & q & \equiv & \lnot q & \to & \lnot p \\
\hline
\T & \hT & \T && \F & \hT & \F \\
\T & \hF & \F && \T & \hF & \F \\
\F & \hT & \T && \F & \hT & \T \\
\F & \hT & \F && \T & \hT & \T \\
\end{array}
$$

$$
\begin{array}{}
\lnot & (p & \to & q) & \equiv & p & \land & \lnot q \\
\hline
\hF & \T & \T & \T && \T & \hF & \F \\
\hT & \T & \F & \F && \T & \hT & \T \\
\hF & \F & \T & \T && \F & \hF & \F \\
\hF & \F & \T & \F && \F & \hF & \T \\
\end{array}
$$

$$
\begin{array}{}
\lnot p & \to & q & \equiv & p & \lor & q \\
\hline
\F & \hT & \T && \T & \hT & \T \\
\F & \hT & \F && \T & \hT & \F \\
\T & \hT & \T && \F & \hT & \T \\
\T & \hF & \F && \F & \hF & \F \\
\end{array}
$$

$$
\begin{array}{}
\lnot & (p & \to & \lnot q) & \equiv & p & \land & q \\
\hline
\hT & \T & \F & \F && \T & \hT & \T \\
\hF & \T & \T & \T && \T & \hF & \F \\
\hF & \F & \T & \F && \F & \hF & \T \\
\hF & \F & \T & \T && \F & \hF & \F \\
\end{array}
$$

With three variables:

$$
\begin{array}{}
(p & \to & q) & \land & (p & \to & r) & \equiv & p & \to & (q & \land & r) \\
\hline
\T & \T & \T & \hT & \T & \T & \T && \T & \hT & \T & \T & \T \\
\T & \T & \T & \hF & \T & \F & \F && \T & \hF & \T & \F & \F \\
\T & \F & \F & \hF & \T & \T & \T && \T & \hF & \F & \F & \T \\
\T & \F & \F & \hF & \T & \F & \F && \T & \hF & \F & \F & \F \\
\F & \T & \T & \hT & \F & \T & \T && \F & \hT & \T & \T & \T \\
\F & \T & \T & \hT & \F & \T & \F && \F & \hT & \T & \F & \F \\
\F & \T & \F & \hT & \F & \T & \T && \F & \hT & \F & \F & \T \\
\F & \T & \F & \hT & \F & \T & \F && \F & \hT & \F & \F & \F \\
\end{array}
$$

$$
\begin{array}{}
(p & \to & r) & \land & (q & \to & r) & \equiv & (p & \lor & q) & \to & r \\
\hline
\T & \T & \T & \hT & \T & \T & \T && \T & \T & \T & \hT & \T \\
\T & \F & \F & \hF & \T & \F & \F && \T & \T & \T & \hF & \F \\
\T & \T & \T & \hT & \F & \T & \T && \T & \T & \F & \hT & \T \\
\T & \F & \F & \hF & \F & \T & \F && \T & \T & \F & \hF & \F \\
\F & \T & \T & \hT & \T & \T & \T && \F & \T & \T & \hT & \T \\
\F & \T & \F & \hF & \T & \F & \F && \F & \T & \T & \hF & \F \\
\F & \T & \T & \hT & \F & \T & \T && \F & \F & \F & \hT & \T \\
\F & \T & \F & \hT & \F & \T & \F && \F & \F & \F & \hT & \F \\
\end{array}
$$

$$
\begin{array}{}
(p & \to & q) & \lor & (p & \to & r) & \equiv & p & \to & (q & \lor & r) \\
\hline
\T & \T & \T & \hT & \T & \T & \T && \T & \hT & \T & \T & \T \\
\T & \T & \T & \hT & \T & \F & \F && \T & \hT & \T & \T & \F \\
\T & \F & \F & \hT & \T & \T & \T && \T & \hT & \F & \T & \T \\
\T & \F & \F & \hF & \T & \F & \F && \T & \hF & \F & \F & \F \\
\F & \T & \T & \hT & \F & \T & \T && \F & \hT & \T & \T & \T \\
\F & \T & \T & \hT & \F & \T & \F && \F & \hT & \T & \T & \F \\
\F & \T & \F & \hT & \F & \T & \T && \F & \hT & \F & \T & \T \\
\F & \T & \F & \hT & \F & \T & \F && \F & \hT & \F & \F & \F \\
\end{array}
$$

$$
\begin{array}{}
(p & \to & r) & \lor & (q & \to & r) & \equiv & (p & \land & q) & \to & r \\
\hline
\T & \T & \T & \hT & \T & \T & \T && \T & \T & \T & \hT & \T \\
\T & \F & \F & \hF & \T & \F & \F && \T & \T & \T & \hF & \F \\
\T & \T & \T & \hT & \F & \T & \T && \T & \F & \F & \hT & \T \\
\T & \F & \F & \hT & \F & \T & \F && \T & \F & \F & \hT & \F \\
\F & \T & \T & \hT & \T & \T & \T && \F & \F & \T & \hT & \T \\
\F & \T & \F & \hT & \T & \F & \F && \F & \F & \T & \hT & \F \\
\F & \T & \T & \hT & \F & \T & \T && \F & \F & \F & \hT & \T \\
\F & \T & \F & \hT & \F & \T & \F && \F & \F & \F & \hT & \F \\
\end{array}
$$

This is the same as $\lnot p \lor \lnot q \lor r$.

##### Logical equivalences involving biconditional statements<a name="equiv-biconditionals"></a>

$$
\begin{array}{}
p & \iff & q & \equiv & (p & \to & q) & \land & (q & \to & p) \\
\hline
\T & \hT & \T && \T & \T & \T & \hT & \T & \T & \T \\
\T & \hF & \F && \T & \F & \F & \hF & \F & \T & \T \\
\F & \hF & \T && \F & \T & \T & \hF & \T & \F & \F \\
\F & \hT & \F && \F & \T & \F & \hT & \F & \T & \F \\
\end{array}
$$

$$
\begin{array}{}
p & \iff & q & \equiv & (p & \land & q) & \lor & (\lnot p & \land & \lnot q) \\
\hline
\T & \hT & \T && \T & \T & \T & \hT & \F & \F & \F \\
\T & \hF & \F && \T & \F & \F & \hF & \F & \F & \T \\
\F & \hF & \T && \F & \F & \T & \hF & \T & \F & \F \\
\F & \hT & \F && \F & \F & \F & \hT & \T & \T & \T \\
\end{array}
$$

$$
\begin{array}{}
\lnot & (p & \iff & q) & \equiv & p & \iff & \lnot q \\
\hline
\hF & \T & \T & \T && \T & \hF & \F \\
\hT & \T & \F & \F && \T & \hT & \T \\
\hT & \F & \F & \T && \F & \hT & \F \\
\hF & \F & \T & \F && \F & \hF & \T \\
\end{array}
$$

**Proof example** using these equivalences: show that $(p \land q) \to (p \lor q)$ is a tautology.

$$
\begin{align}
(p \land q) \to (p \lor q) \\
\lnot (p \land q) \lor (p \lor q) \\
(\lnot p \lor \lnot q) \lor (p \lor q) \\
(\lnot p \lor p) \lor (\lnot q \lor q) \\
\bold{T} \lor \bold{T} \\
\bold{T} \\
\end{align}
$$

From the equivalence $a \to b \equiv \lnot a \lor b$, we can deduce (2). We then obtain (3) with De Morgan's Law, (4) by using the Associative Law, (5) through the Negation Law and (6) by using the Domintation Law for $\bold{T}$ (or the Idempotent Law $a \lor a \equiv a$).

## Unsatisfiability

An assignment of truth variables that makes a statement true is a **solution**. A statement with at least one solution is **satisfiable**. A statement without any solution is said to be **unsatisfiable**.

To prove that a statement is **satisfiable**, we only need to find one solution. To prove that it is **unsatisfiable**, we need to prove that _every_ assignment of truth values to its variables makes it false.

A statement is unsatisfiable **iff** it's negation is a tautology.

#### To go further

See {% link "sudoku-solver" %} for a some explorations on how to model a complex problem and how to use software to solve constraints. You can also look at some of the exercises for this chapter: {% link "rosen ex 1.3" %}.
