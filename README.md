<p align='center'><img alt="mail momentum logo" src='https://res.cloudinary.com/dqykfmixh/image/upload/v1720241254/mailmomentum/sd1iynhljj0y96rj4vfa.svg' width="150" ></p>
<h1 align='center'> Mail Momentum </h1>
<p>
In today's digital age, email is a vital tool for businesses to connect with their audience, build relationships, and drive sales. However, many companies struggle with low open rates and click-through rates (CTR), making it challenging to measure the effectiveness of their campaigns and achieve their marketing goals. This issue isn't limited to businesses alone; job seekers also face similar challenges when cold emailing potential employers or networking contacts, often receiving little to no response. This is where Mail Momentum comes in. By providing a robust A/B testing platform, Mail Momentum helps both businesses and individuals optimize their email strategies, improve engagement, and achieve better outcomes. Whether you're a marketer looking to boost your campaign performance or a job seeker trying to make your emails stand out, Mail Momentum offers the tools and insights needed to succeed.
</p>
<br>
<br>
<img width="1327" alt="mail momentum user interface" src="https://res.cloudinary.com/dqykfmixh/image/upload/v1720241551/mailmomentum/lostyaxqd1pxgvd7rmay.png">

## What is it? ⛹️‍♂️

Mail Momentum is a tool designed to help people improve their email marketing efforts. Here’s how it works and why it’s useful:

1. <b>A/B Testing:</b> It lets you create different versions of your emails to see which one gets the best results. For example, you can test different subject lines or sender names to find out what your audience likes more.
2. <b>User-Friendly Interface:</b> The platform is easy to use, allowing you to design, preview, and manage multiple email templates without any hassle.
3. <b>Real-Time Dashboard:</b> It provides a dashboard where you can see how each email version is performing. This includes data like how many people opened your email and how many clicked on links inside it, all shown in easy-to-understand charts.
4. <b>Email Service Integration:</b> It works with email services like Mailgun or SMTP, making the process of sending emails and tracking their performance automated and efficient.

##

Live @ https://mail-momentum-client.vercel.app/
<br>
BackEnd Repo: https://github.com/sumanmaji4/mailMomentumServer

##

## Prerequisites 👨‍💻

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local 💻

### To spin up the backend server

<!-- Navigate to the main project folder in a seperate terminal. Then install all npm packages -->

Clone the backend in localhost

```bash
git clone https://github.com/sumanmaji4/mailMomentumServer.git
```

Install all the dependencies by doing

```bash
npm install
```

Create a .env file a the root and set this variables and put your own data

```
MONGO_URI =
MAILGUN_API_KEY =
MAILGUN_DOMAIN =
BASE_URL = http://localhost:8080
PORT = 8080
```

Now it's time to spin up the backend server. Run the lines

```bash
npm run dev
```

Note: The Server Runs on **localhost:8080**
<br>
<br>
<br>

### To spin up the frontend server

Clone the Frontend in localhost

```bash
git clone https://github.com/sumanmaji4/mailMomentumClient.git
```

Install all the npm packages. In the root type the following command to install all npm packages

```bash
npm install
```

Create a .env file a the root and set this variable

```
NEXT_PUBLIC_HOST_URL = http://localhost:8080
```

In order to run the application in development mode type the following command

```bash
npm dev
```

The Application Runs on **localhost:3000**

## How I built it 🧑‍💻

In Mail Momentum, I utilized a combination of cutting-edge technologies to build a robust and efficient platform. For the frontend, I used React and Next.js to create a dynamic and responsive user interface, incorporating server-side rendering for improved performance and SEO, and integrated Chart.js for interactive data visualization. On the backend, I built RESTful APIs using Node.js and Express for handling experiment management and data analysis, and chose MongoDB as the database for its flexibility and scalability in securely storing experiment configurations and results. I integrated email services like Mailgun to manage and send emails. This tech stack enables Mail Momentum to provide an intuitive, powerful platform for optimizing email marketing campaigns through A/B testing, real-time analytics, and actionable insights.

## Challenges I ran into 🥺

I faced numerous challenges throughout the development of Mail Momentum. The first challenge was figuring out how to effectively track email clicks. My solution was to embed a call-to-action button that redirects the user to a dynamic route, where the email template ID is different. This allowed me to take specific actions based on the user's interaction. The second challenge was tracking email opens. To tackle this, I implemented a tracking pixel – an invisible image added to the email. When the recipient opens the email, the tracking pixel is fetched from our server, recording the open time. However, this method has its drawbacks as emails can land in the spam folder, leading to lower open rates, and many companies now block such tracking pixels. Therefore, I am currently exploring alternative methods to improve email open tracking while adhering to modern email security practices.

## Accomplishments that I'm proud of 😎

One of my proudest accomplishments is completing Mail Momentum in just 3 to 4 days. Within this short timeframe, I immersed myself in learning Chart.js and React-to-Print to enhance the platform's functionality. Despite the tight schedule, I successfully integrated these technologies and ensured they worked seamlessly within the application. This experience not only expanded my technical skills but also demonstrated my ability to adapt quickly and deliver results efficiently. I am particularly proud that Mail Momentum, developed in such a short period, has the potential to significantly benefit users by optimizing email marketing strategies through innovative features and reliable performance.

## Built With 💕

- React.js
- Next.js
- Node.js
- Chart.js
- Express.js
- Javascript
- MailGun
- MongoDB
- Mongoose
- Tailwind CSS
- Vercel
- Render

## What's next for Mail Momentum 🔥

Next, I plan to integrate a robust text editor to enhance user capabilities and further improve the user interface for a more intuitive experience. Additionally, I aim to introduce mail scheduling functionality, allowing users to schedule emails for optimal delivery times. These enhancements will elevate Mail Momentum's usability and effectiveness, ensuring it continues to meet the evolving needs of email marketers and users alike.
