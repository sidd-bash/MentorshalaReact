# Mentorshala

## Setup Instructions

1. Clone this repository to your desktop.
2. Install Node.js on your system.
3. Navigate to the folder where you cloned the project, then run `npm install` in both the **client** and **server** directories.
4. In the **server** directory, create a file named `config.env` and add the following lines:

   ```
   MENTORSHALA_DB_URI=<mongodb_uri>
   MENTORSHAL_NS=mydb
   PORT=5000
   ```
5. In the **client** directory, replace every instance of

   ```
   https://mentorshala-backend.onrender.com
   ```

   with

   ```
   http://localhost:5000
   ```
6. Open a terminal in the **client** directory and run:

   ```bash
   npm start
   ```
7. Open a new terminal in the **server** directory and run:

   ```bash
   nodemon server
   ```

Now your application will be running on **localhost:3000**.

---

## How to Use

1. Open the app in your browser and click the **Login** button.
2. Enter the following credentials:

   * **Username:** `dummy@gmail.com`
   * **Password:** `234`
3. You will now see the main page interface.
4. Swipe **left** on a card if you dislike the person.
5. Swipe **right** on a card if you like the person.
6. When you swipe right, the **matches section** of the person you liked will be updated, and your name will appear there.

