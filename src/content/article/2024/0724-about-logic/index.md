---
layout: article.liquid
tags: article
title: About Logic
date: 2024-07-24
id: about-logic
summary: About blue skies, rain and trusting a witness
---

# About Logic

Before we can even start to talk about proofs, propositions, statements, negation, and connectives, let's think about blue skies and rain.

Let's say we have a witness called Alex and s.he can answer some questions that we can as them, such as "What is the color of the sky?" or "Does it rain?". In order to talk with Alex and start exploring questions around the colors of the sky and the rain, we need to set boundaries around the breadth of what we are exploring. For example, questions around the trustworthiness of Alex, their capacity to see the sky or rain, the fidelity of our communication device, our own capacity to understand language, the reality of the sky as an objective thing, we decide that all these questions lie _outside_ of our exploration boundary and as such, we can say that the following facts are considered absolute truths, i.e., axioms:

- Alex tells the truth
- Alex can see the sky and feel if it rains without any doubt
- The sky is either Blue or Grey
- It either Rains or it Does Not Rain
- This world has no rainbows (it never Rains when the Sky is Blue)

Once these axioms are in place, we can express **statements** such as "The Sky is Grey" or "It Rains" which are either true or false (but not both and not neither). We can also prove them by asking Alex (deduce them from our axioms): they are not undecided.

We can use use some symbols to refer to them:

- $g$: The Sky is Grey
- $r$: It Rains

From these two statements, we can express their negations using the $\lnot$ symbol:

- $\lnot g$ The Sky is Not Grey (it is Blue)
- $\lnot r$ It Does Not Rain

We understand that our symbols $g$ and $r$ can be true or false: they are binary variables and their domain is a finite set containing exactly two values that we can call "true" and "false", like this $\{\text{true}, \text{false}\}$ or $\{\text{T},\text{F}\}$. But since I tend to confuse T and F visualy, I prefer $\{\T,\F\}$, the black circle meaning "true" and the little dot meaning "false".

With these conventions, we can draw a table with all the possible values of our two statements "The Sky is Grey" and "It Rains", represented by the variables $g$ and $r$:

$$
\begin{array}{l|c}
g & r \\
\hline
\T & \T \\
\T & \F \\
\F & \T \\
\F & \F
\end{array}
$$

In this table, each line represents one possible assignment of values to $g$ and $r$. We call one such assignment a "model".

Before we can write statements connecting these variables, let us define some operators, from highest to lowest precedence (operators with highest precedence are evaluated first):

$$
\begin{align}
\lnot & \quad \text{not} \\
\land & \quad \text{and} \\
\lor & \quad \text{inclusive or} \\
\to & \quad \text{implies} \\
\iff & \quad \text{if and only if}
\end{align}
$$

Regarding implication, we must first stress, that **implication does not mean causation**! We will come back to this later. For now we should know that there are many ways to express $a \to b$:

- **a implies b**{.high}
- **if a then b**{.high}

Or, starting with $b$:

- **b is implied by a**{.high}
- **b if a**{.high}

And these, sometimes harder to understand. For the first two, you can use the "sun" mnemonic, "**su**fficient - **n**ecessary" to remember which is which:

- **a is sufficient for b**{.high}
- **b is necessary for a**{.high}
- **a only if b**{.high}

And finally, the contraposition (a direct consequence of "a only if b"):

- **if not b then not a**{.high}

As for the biconditional $a \iff b$, this is the same as $b \to a$ ("a if b") and $a \to b$ ("a only if b"), which gives us:

- **a if and only if b**{.high}

Now, let's try to write some propositions that connects the color of the sky and the fact that it rains and try to better understand what these operators mean. We can say:

1. If the Sky is Not Grey, then It Rains.
1. It Rains, if the Sky is Grey.
1. The Sky is Grey and It Does Not Rain.
1. It Rains or the Sky is Not Grey.
1. The Sky is Grey or it Does Not Rain.
1. It is sufficient for the Sky to be Grey for it to Rain.
1. When it Rains, the Sky is Grey.
1. The Sky being Grey is necessary for it to Rain.

Given our axioms, some of these affirmations are true, and some are false. Let's try to see which ones by first rewriting them using operators (you can do it first as an exercise and then click on the "+" sign):

{% fold %}

1. If the Sky is Not Grey, then It Rains: $\lnot g \to r$
1. It Rains, if the Sky is Grey $g \to r$
1. The Sky is Grey and It Does Not Rain: $g \land \lnot r$
1. It Rains or the Sky is Not Grey: $r \lor \lnot g$
1. The Sky is Grey or it Does Not Rain: $g \lor \lnot r$
1. It is sufficient for the Sky to be Grey for it to Rain: $g \to r$
1. When it Rains, the Sky is Grey: $r \to g$
1. The Sky being Grey is necessary for it to Rain: $r \to g$

{% fold 'end' %}
