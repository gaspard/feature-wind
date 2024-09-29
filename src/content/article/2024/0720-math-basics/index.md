---
layout: article.liquid
tags: article
title: Mathematics Little Tricks
date: 2024-07-20
id: math-basics
summary: Some simple tricks to be better at maths
---

# Mathematics Little Tricks

#### 1. Do Not Try to Be Fast

Yes, solving with one glance looks cool, but there are many more probabilities that you are like me (not a genius) and for people like us, it's much better to train by doing a lot, _carefully_ and _slowly_ but _correctly_, than to do things **fast and wrong**.

It's the `I cannot Overclock My Brain`{.high} rule.

paragraph _style me_{.red} more text...

#### 2. Finish Calculations

When you have this "Ah! I see" feeling with something, **it is not a reason to not finish** and solve the problem until the end. Do not trust your "vision".

It's the `My Visual Processing Has Bugs`{.high} rule.

#### 3. One Step At a Time

Taking shortcuts feels so cool, but flattering our sense of greatness at the cost of correctness is idiocy. For example, in

$$
-3(2x + 1)(x - 4),
$$

you need to **completely solve**:

$$
(2x + 1)(x - 4) = 2x^2 - 8x + x - 4 = 2x^2 - 7x - 4
$$

before multiplying by $-3$:

$$
-6x^2 + 21x + 12.
$$

Yes, it feels nice to be fast and write less, but confusion makes us slow without us noticing. This means that the gain of taking shortcuts is very little but the cost can be very high: _failure_. So, **finish one step** before **starting the next**.

This is the `My Brain Has No RAM`{.high} rule.

#### 4. Don't Be Off By One

This is one of the most common mistakes to make

#### 5. Spot The Patterns (in polynomials)

**The Difference of Squares**{.high}:

$$
a^2 - b^2 = (a + b)(a - b)
$$

For example, in $x(2x^2 - 1)$, you need to see:

$$
\begin{array}{cll}
x & (\underbrace{2x^2}_{a^2} - \underbrace{1}_{b^2}) \\
\\
x & (\underbrace{\sqrt{2}x + 1}_{a + b}) & (\underbrace{\sqrt{2}x - 1}_{a - b})
\end{array}
$$

#### 6. Know Your Limits

**The Limit Is Trivial**{.high}:

Before diving into complicated substitutions (that would lead to a wrong
answer), make sure to check that the limit is actualy indefinite!

For example, this is not the limit of $\frac{sin(t)}{t}$:

$$
\lim_{n \to 0} \frac{sin(x^2 + 3x + 5)}{x^2 + 3x + 5} = \frac{sin(5)}{5}
$$

**Indefinite Forms**{.high}:

|        Indefinite forms         |
| :-----------------------------: |
|      $\Large{\frac{0}{0}}$      |
| $\Large{\frac{\infty}{\infty}}$ |
|        $0 \times \infty$        |
|          $1^{\infty}$           |
|             $0^{0}$             |
|          $\infty^{0}$           |
|         $\infty-\infty$         |

**Exponential**{.high}:

$$
\begin{equation}
\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e
\end{equation}
$$

For example, you need to spot the connection with the above limit in:

$$
\lim_{n \to \infty} n\ ln\left(1 + \frac{1}{n}\right) \\
$$

{% fold %}

Because if we take the $ln$ on both sides of (1), we get:

$$
\begin{align*}
ln\left(\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n\right) = ln(e) \\
\lim_{n \to \infty} n\ ln\left(1 + \frac{1}{n}\right) = 1
\end{align*}
$$

{% fold 'end' %}

Or in

$$
\lim_{x \to \infty} \left(\frac{x - 2}{x + 1}\right)^{2x + 3}
$$

{% fold %}

Because, we can rewrite the inner element and change the exponent in a way to match the "exponential" pattern above:

$$
\begin{align*}
\lim_{x \to \infty} & \left(\frac{x + 1 - 1 - 2}{x + 1}\right)^{2x + 3} \\
\lim_{x \to \infty} & \left(\frac{x + 1}{x + 1} + \frac{- 1 - 2}{x + 1}\right)^{2x + 3} \\
\end{align*}
$$

Are you starting to see where this is going ?

$$
\begin{align*}
\lim_{x \to \infty} & \left(1 + \frac{-3}{x + 1}\right)^{2x + 3} \\
\lim_{x \to \infty} & \left(1 + \frac{1}{\frac{x + 1}{-3}}\right)^{2x + 3} \\
\lim_{x \to \infty} & \left(1 + \frac{1}{\frac{x + 1}{-3}}\right)^{\frac{x+1}{-3}\frac{-3}{x+1}(2x + 3)} \\
\end{align*}
$$

By grouping terms around $\frac{x+1}{-3}$, we now see:

$$
\begin{align*}
\lim_{x \to \infty} & \left[\left(1 + \frac{1}{
 \frac{x + 1}{-3}
  }\right)^{
  \frac{x + 1}{-3}
  }\right]^{\frac{-3}{x+1}(2x + 3)} \\
\end{align*}
$$

Because $\lim_{x \to \infty} \frac{x+1}{-3} = \infty$ and through (1), we can replace the terms inside brackets by $e$:

$$
\begin{align*}
& e^{\lim_{x \to \infty} \frac{-3}{x+1}(2x + 3)} \\
& \exp\left(\lim_{x \to \infty} \frac{-3}{x+1}(2x + 3)\right) \\
& \exp\left(\lim_{x \to \infty} \frac{-6x - 9}{x+1}\right) \\
& e^{-6}
\end{align*}
$$

{% fold 'end' %}

#### 7. Double (Triple) Check Your Signs

This is one of the most confusing parts about numbers for me: they have a sign that messes everything up.
