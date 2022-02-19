# Motorcycles test DEV

## Description

Build a list that contains time slots, in 30-minute intervals. That starts at 8am and ends at 8pm. In other words, a
painting with a block that starts at 8, then 8.30, 9, 9 30 until 8pm.

The company has availability of 8 motorcyclists every 30 min, when someone clicks on one of these boxes they should take
a motorcyclist resource, it is to say that a counter that starts at 8 and then goes down to 7, moreover mark the box in
green

If the same user clicks on the same box, he must release the resource, if it was green, he/she must release the
resource, it is to say that the counter again goes from 7 to 8.

If other users have taken all the motorcyclists, the box should appear in red and they should not let me take that time

### Features

- Real time changes
- Pagination
- Atomic design

### Technologies used

- React.js
- Apollo server - Client
- Websockets
- Graphql
- Prisma

### Examples
![alt text](https://raw.githubusercontent.com/Juandcode/test-development-motorcycles/master/Screenshot%202022-02-19%20111945.png)
