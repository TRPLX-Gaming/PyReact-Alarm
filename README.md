<h1 align='center'><i>PyReact Alarm by TRPLX</i></h1>

### Overview

Under my IT program where i decided to enroll under the python development
course, as we got deeper, there was an alarm clock example project that's
terminal based and used pygame. Furthermore, tired of making terminal based
programs that aren't data science projects or backend servers feels too
undermining or waste of time so I decided to actually build a project with UI
and to kill 2 birds with a shotgun, I decided to leave my comfort zone of
vanilla frontend to dive into the industry standard, React frontend framework.

Basically this project is my first ever React project so I decided to run head first into easy familiar territory, jsx, as I'm already used to the unpredictabilities of JavaScript.

## **Versions:**

### **I. v1.0.0**

-  **Background**: After back and forth self teaching with AI and research, I made a compromise to release it as soon as possible. Little did I know that the compromise will come back to bite me in the ass. As it was my first ever React project, it mainly entailed a
monolith alarm manager component. It handles the addition of one alarm. Yes, you
read that correctly, to push this out as fast I could, I capped the total amount
of alarm instances to just 1, thinking that no one would care as it was a basic
alarm program. So I needed some feedback on the program and my friend, SJ,
immediately pointed out that he didn't like as there was just one alarm instance
and I knew I did this to myself. Working on V2, a complete Overhaul!


- **Core Features**: 
   -   Monolith Alarm manager component handling the additon and editing of a
   single alarm instance.
  -   Just a single utility function for actual time tracking to no add more
  bloat to the already bloated alarm manager component.

### **II. v2.0.0**

-   **Background**: I actually forgot to push or make local commits to this
repo. I've been working on the Overhaul incrementally, work on a feature today,
complete it and start another the next, usually sleeping off while coding on my
phone. And if you're reading this version, it means I basically discarded 80% of
my original code structure. I did that because I kept on trying to find ways to
refactor the original monolith alarm manager component but decided to
systematically rewrite the codebase from scratch with modularity and multiple
alarm instance support as the core building philosophy. So I distributed the
entire workload of the monolith alarm manager component into separate reusable
components(it was then I fully actualized the selling point of react as well as
its core architecture of "Props down, Events up") Its been a lot different from
what I'm used to in vanilla frontend. I still got more work to do but they're
going to be easier to implement as the program actually has a scalable building
foundation. I still have a long way to go but I believe I've gotten the core
fundamentals set

DISCLAIMER: It's not my first time learning how to code or structure codebases
but when learning a new tool, you've gotta mess around with it a bit to get a
hang of it 

-   **Core Features:**
    -   distributed functionality across multiple reusable components
    -   a neater codebase
    -   support for multiple alarm instances
    -   able to modify and delete alarm instances with their indexes 
    -   alarm tracking with a trigger element

### **III. v2.0.1**

-   **Background**: Currently, I'm in a time crunch because my IT program is
about to end and I plan to build a quiz platform which I will expand upon later
on, calling it TripQuiz so I'll have to round up this project to work on the
other. The tradeoff I made for speed was customisability as I simply used the
native `alert()` function to show that the alarm has been triggered. My initial
plan was to use customized modals(```TriggeredAlarm``` component) that appear
when each alarm time reaches. Then it'd track the alarm via it's own parallel
list of triggers that mirror operations made on the other alarm list. This is
just the baseline for more features down the line. The codebase overhaul was
needed to make it more scalable for future projects.

-   **Core Features:**:
    -   basic alarm tracking using `alert()`
    -   no audio-enabled alarms yet 


## **Upcoming Features**
-   support to track all alarm instances
-   possibly a better UI
-   support for audio-enabled alarm triggers
-   Quality Of Life Features: clear input button alongside other input bars to
avoid forced input as there is no current way to clear the input bars(its
definitely a feature), etc 


<h1 align='center'>Thanks For Reading</h1>