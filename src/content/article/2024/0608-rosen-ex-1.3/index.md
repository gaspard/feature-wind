---
layout: article.liquid
title: Rosen Exercises 1.3
tags: article
date: 2024-06-07
id: rosen-ex-1.3
summary: Exercises on propositional equivalences
---

# Rosen Exercises 1.3

Some solutions for Chapter 1.3 of {% bib "Rosen 2012" %}. Some notes for this chapter can be found {% link "rosen 1.3" "here" %}.

### 9

Prove tautologies by using truth tables. For these exercises, we show the truth values below each operator or variable for each model, one per line.

$$
\begin{array}{c c c|c|c}
(p & \land & q) & \to & p \\
\T & \T & \T & \T & \T \\
\T & \F & \F & \T & \T \\
\F & \F & \T & \T & \F \\
\F & \F & \F & \T & \F \\
\end{array}
$$

The column for the operator evaluated last ($\to$) gives us the truth values for the proposition for each model. Since every row is $\T$ (true), the proposition is a **tautology** ($\equiv\bold{T}$).

$$
\begin{array}{c|c c c|c|c}
\lnot & (p & \to & q) & \to & p \\
\F & \T & \T & \T & \T & \T \\
\T & \T & \F & \F & \T & \T \\
\F & \F & \T & \T & \T & \F \\
\F & \F & \T & \F & \T & \F \\
\end{array}
$$

### 11

Show that $(p \land q) \to p$ is a **tautology** without using truth tables:

- If the hypothesis (also called antecedent or premise) $(p \land q)$ is false, the implication is always true (the value of the consequent $p$ is irrelevant).
- We should thus only consider the case where the hypothesis $(p \land q)$ is true and prove that the consequent is also true.
- In this case, if both $p$ and $q$ are true, then $p$ is true and the implication is also true.
- The statement is thus always true, and is a tautology.
