---
layout: default
title: Lab Check-Off Questions
permalink: labquestions/index.html
---

{% include nav.html %}

{% include quicklinks.html %}

<script>
    {% include_relative assets/cs10.js %}
</script>

# Lab Check-Off Questions

<div class="page-section" markdown="1">

## Directions

**All lab check-off deadlines are at 11:59PM.**
(However, you need to get checked off by a TA or lab assistant, so you last chance to get checked off is during lab or office hours.)

To get checked off, you should prepare answers to the specific questions for each lab. You shouldn't feel compelled to memorize every single detail of lab. The goal here to make sure you're on track with CS10 and you should be comfortable with the higher level concepts for each question. For each lab the first questions are the biggest ideas, and the later questions are for your own benefit and review.

Note that you only need to get checked off for 1 lab each week! You get to pick which lab you'd like to get checked off for, and we encourage you to get checked off for whatever is the **most** challenging. You'll get credit for effort, and getting close to the answer, so this is a great way to check in with your TA and Lab Assistants.

**Remember:** Even if you miss a check-off deadline, you can still get 50% credit for any lab check off at any time during the semester.

</div>

---

<div class="page-section" markdown="1">

## Quick Links

* [Lab 1](#lab1) (Week 1)
* [Lab 2](#lab2)
* [Lab 3](#lab3) (Week 2)
* [Lab 4](#lab4)
* [Lab 5](#lab5)
* [Lab 6](#lab6) (Week 3)
* [Lab 7](#lab7)
* [Lab 8](#lab8) (Week 4)
* [Lab 9](#lab9)
* [Lab 10](#lab10) (Week 5)
* [Lab 11](#lab11) 
* [Lab 12](#lab12) (Week 6)
* [Lab 13](#lab13) 
* [Lab 14](#lab14) (Week 7)
* [Lab 15](#lab15)
</div>

---

<div class="page-section" markdown="1">

# Week 1: Labs 1 and 2: No check-off needed!

## Lab 1: Welcome to Snap<em>!</em>   {#lab1}
No questions for this lab!

## Lab 2: Build Your Own Blocks (Self-Check Questions) {#lab2}

*  Show us how to make your own block.
*  Why would we want to have an input in our block?
*  Show us your Draw Polygon block.
*  Make the bug dance!
*  Show us your Draw Square-Leaved Flower block.
*  Why might we want our drawing blocks to end in the same position and orientation that they began at?
*  Show us your Draw Flower block.
*  Why might we want to use the pick random block?
*  What are conditionals? Why do we use them?
*  What is the difference between the if and the if-else blocks?
*  What are the different types of blocks in Snap!? How are they different?
*  Give an example of a predicate block in Snap!
*  Show us your Traffic Signal block.
*  What is the difference between the and, or, and not blocks? What are these examples of?
*  How do you make a script variable? Why are these useful?
*  Correctly answer the questions on the “Self-test: Complex Booleans” page and show us.
*  Which code for the Leap Year block did you find easiest to read? Which was easiest to debug? Why?
*  Show us how your is _ between _ and _ ? block works.

---

# Week 2: Labs 3, 4, and 5: due 7/7

## Lab 3: Functions  {#lab3}
* Show us the `sum of two smallest _, _, _` block.
* Show us the `Are any equal _, _, _ ?` block.
* Show us the fixed version of the three `sum of numbers between _ and _` blocks and explain what you fixed.
* Show us the fixed `draw house` block. 
* What does the "Check Block" do? 

## Lab 4: Finch Robots  {#lab4}

* Due to the hardware requirements of this lab, it will not count towards a check-off.

## Lab 5: Lists  {#lab5}

* State the domain and range of `map`, `keep`, and `combine` and explain what each block does.
* Show us the `longest word []` block.
* Show us the `display word _ with letters []` block.
* Show us the `exaggerate _` block.

---

# Week 3: Labs 6 and 7: Due 7/14

## Lab 6: Algorithms and Algorithmic Complexity  {#lab6}

* Show us your `find number in a sorted list` block. What algorithm are you using in this block and how does it work?
* If the number of inputs, N, doubles, how would that change the Worst Case Running Time for `find number in unsorted list`? What about `find number in a sorted list`?
* In your experimental Number-guessing game, which algorithm did you find to be faster? Did you think of any other strategies?
* Show us your Non-Gauss and Gauss versions of `Add all numbers in`. Which was faster? Why?
* Show us your `Are the numbers of (list) distinct?` block. What is the difference in runtime between the two blocks?


## Lab 7: Trees and Fractals with Recursion  {#lab7}

* Why do we use recursion?
* What would happen in our `make tree` block if we inputted a negative value for levels? Why?
* What is the difference between the base case and the recursive case?
* Show us your `crazy-tree` block.
* Show us your `snowflake` or `c-curve` block.

---

# Week 4: Labs 8 and 9: Due 7/21

## Lab 8: Testing {#lab8}

* Give a detailed explanation of how the `test` block works.
* Show us the test case for the `merge up` block.
* Show us the test case for the `merge column` block.

## Lab 9: Recursive Reporters {#lab9}

* Show us the recursive `exaggerate` block.
* Show us the `ends-e` block.
* Show us the `numbers` block.
* Explain how the `sort` block works, how the `merge` block works, and how they work together.
* How many recursive calls are made to find the subsets of a 6 element list?
* Can we reduce the number of recursive calls? How?

---

# Week 5: Lab 10 and 11: Due 7/28

## Lab 10: Concurrency {#lab10}

#### Required Questions

* Describe one pro and one con of the way that Snap! handles concurrency.
* During the card sorting activity, why did adding more people sometimes slow the process down? How does this relate to concurrency?
* What is the difference between determinism and nondeterminism, in the context of concurrency?
* In the Serial Vs Parallel program, what was the bug on the parallel side? Show us how you fixed it. 
* What is deadlock? What is a race condition?

## Lab 11: The Internet {#lab11}

* This lab is optional, and it will not count towards a check-off.

---

# Week 6: Labs 12 and 13: Due 8/4

## Lab 12:  Lambdas and HOFs {#lab12}

#### Required Questions

* How can we use functions as data in Snap? What do the “call” and “run” blocks do, and what’s the difference between them?
* Explain your `is _ pandigital?` block.
* Explain your `min value of _ over all numbers in _`? How would we make a maximizing version of this block?

#### Self-Check Questions

* Look at the `draw tree with size _ levels _ line-type: _`. How does this differ from how we drew trees before? What does the `type-of-line` argument allow us to do?
* What does the `compose` block allow us to do with functions? What’s the difference between `compose (2 x _) (6 + _)` and `compose (6 + _) (2 x _)`?


## Lab 13: Besides Blocks: Welcome to Python!  {#lab13}

#### Required Questions

* What is the difference between `=` and `==` in python?
* How do you define a function in python?
* Show us the result of running the autograder.

#### Self-Check Questions

* What does 0-indexing mean?
* Show how to open the Python interpreter and run a script.
* What is a directory?
* How do you make a directory, enter a directory, and check what is inside your current directory?

---

# Week 7: Lab 14 and 15: Due 8/11

## Lab 14: Besides Blocks: Data Structures in Python  {#lab14}

#### Required Questions

* Show us that your code passes the tests for all 6 exercises.
* How do dictionaries work in Python? When might we want to use a dictionary instead of a list?
* What types are mutable in Python? How does this compare to Snap!?


#### Self-Check Questions

* What are list comprehensions? How do they compare to HOFs in Snap!?
* How can we iterate through lists and dictionaries in Python?
* How can we have lists or dictionaries with multiple dimensions? When might we want to use them?
* Complete the challenge exercises for extra practice!


## Lab 15: Besides Blocks: Text Processing in Python / Git {#lab15}

#### Required Questions

* How do we choose how something is sorted when using the `sorted` function in Python?
* Show us your `top_n_words` and `print_top_n_words` functions. 
* Show us your `average_word_length` function. 

#### Self-Check Questions

* What is the purpose of the triple quoted comments in our function definitions?
* What was the length of the average word used by MLK? What about Jay-Z?
* Complete the optional exercises for extra practice!


</div>


