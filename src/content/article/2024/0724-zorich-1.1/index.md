---
layout: article.liquid
tags: article
title: Logical Symbolism
date: 2024-07-24
id: zorich-1-1
summary: Notes on chapter 1.1 of Zorich's Mathematical Analysis I
---

# 1.1 Logical Symbolism

Operator precedence (operators with higher precedence "stick" closer to the operands). From highest to lowest:

$$
\begin{align}
\lnot & \quad \text{not} \\
\land & \quad \text{and} \\
\lor & \quad \text{inclusive or} \\
\to & \quad \text{implies} \\
\iff & \quad \text{if and only if}
\end{align}
$$

For example:

$$
(\lnot a) \to (b \lor (c \land d))
$$

Can be writen as:

$$
\lnot a \to b \lor c \land d
$$

Regarding $a \to b$, there are many ways to express this relation, some of them are:

Starting with $a$:

- **a implies b**{.high}
- **if a then b**{.high}
- **a is necessary for b**{.high}

Starting with $b$:

- **b is implied by a**{.high}
- **b if a**{.high}
- **b is sufficient for a**{.high}
- **if not b then not a**{.high}: (contraposition)

As for the biconditional $a \iff b$, this is the same as $(a \to b) \land (b \to a)$, and can be read as:

- **a and b are equivalent**{.high}
