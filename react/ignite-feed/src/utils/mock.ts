import { faker } from "@faker-js/faker";
import { subHours } from 'date-fns';
import { CommentPropsWithoutContent } from "../interfaces/commentProps";
import { PostProps, PostPropsWithoutContentAndComments } from "../interfaces/postProps";

const randomPostContents = [
    "Hello Everyone\nToday I learned how to create a fake blog with react and typescript.\nI feel like it was a good learning experience. You can check it out here: https://rs-ignite-feed.italopussi.com\nI hope you like it! #NeverStopLearning #Rocket",
    "Hi there, I'll be using Ignite Feed from now on to share my projects. #NewComer",
    "💸💸💸 Finances is one of the most important things I have ever learned and I can't imagine my life without it.\n I've created a project that allows me to track my expenses and see how much I spent.\nIt's a great way to keep track of my money. #Finances #Money",
    "Just wrapped up my latest side project!\nBuilt a weather app with React and integrated an API to get real-time data.\n🌦 Check it out here: https://dev-weather-app.example.com #React #APIs #CodingLife",
    "Diving deep into TypeScript today! Finally understanding how type safety can prevent so many bugs in larger projects. Definitely worth the learning curve. 🚀\n#TypeScript #JavaScript #DevTips",
    "I’ve started contributing to open source! 🎉\nIt's an amazing way to learn and give back to the community. Highly recommend everyone to try it at least once.\n#OpenSource #DevCommunity",
    "Learning about Next.js this week, and wow, the server-side rendering feature is such a game changer! ⚡\nExcited to implement this in my next project.\n#NextJS #SSR #WebDevelopment",
    "Just deployed my portfolio website! It's built with Gatsby and hosted on Netlify.\nCheck it out here: https://my-portfolio.dev\n#Gatsby #Netlify #WebDesign",
    "Solved a major performance issue by switching from state-based UI management to React Context API. Game changer! 🧠\n#React #ContextAPI #Performance",
    "After days of debugging, I finally fixed a memory leak in my Node.js backend.\nLesson learned: always be mindful of event listeners! 😅\n#NodeJS #BackendDev #LessonsLearned"
].sort(() => Math.random() - 0.5)

const randomComments = [
    "This is really insightful, thanks for sharing!",
    "I totally agree with your point!",
    "That's a great approach, I'll have to try it out.",
    "This looks amazing, well done!",
    "I learned something new from this post, appreciate it.",
    "Interesting perspective, I hadn't thought of it that way.",
    "Keep up the great work!",
    "This was really helpful, thanks for posting!",
    "I can't wait to see what you do next!",
    "Great explanation, it really cleared things up for me.",
    "Thanks for sharing your experience, very motivating!",
    "This is exactly what I needed to read today.",
    "Fantastic job, this must have taken a lot of effort!",
    "Your posts always provide such value, thanks!",
    "Inspiring stuff, really appreciate the insight.",
    "This makes so much sense, thanks for breaking it down.",
    "You’re doing amazing things, keep it up!",
    "This is really well thought out, great post!",
    "You have a unique way of explaining things, love it!",
    "Really appreciate the time you put into sharing this.",
    "This helped me solve a problem I've been stuck on.",
    "Thanks for the detailed breakdown, super helpful!",
    "I always enjoy reading your posts, keep them coming!",
    "Your content always gives me something to think about.",
    "Amazing insights, thanks for sharing your knowledge.",
    "I’ve been trying to figure this out, thanks for the help!",
    "This is a game changer, appreciate it!",
    "You’ve got such a clear way of presenting ideas.",
    "This is a really useful post, thanks for taking the time.",
    "I'm really glad you shared this, very informative!",
    "You always share great content, I look forward to more!",
    "This made my day, thanks for the inspiration!",
    "Your posts are always so thoughtful and informative.",
    "That’s such a valuable perspective, thanks for sharing!",
    "I love how you break down complex topics into simple terms.",
    "This is exactly what I've been looking for!",
    "You never fail to deliver quality content.",
    "I appreciate your thoughtful approach to this subject.",
    "Well said, couldn't agree more!",
    "This is so on point, thanks for posting!",
    "You make everything look so simple!",
    "I’ve been struggling with this, your post helped a lot.",
    "Such a fresh take on this topic, I really enjoyed it.",
    "I'm bookmarking this for future reference!",
    "You're an inspiration, thanks for sharing your journey.",
    "Every post you share is so insightful!",
    "This is the kind of content I come here for!",
    "I appreciate how much effort you put into these posts.",
    "Your passion really shines through in your work.",
    "This really resonated with me, thanks for sharing.",
    "Great post, I learned a lot from this!"
].sort(() => Math.random() - 0.5)

function mockCommentWithoutContent(): CommentPropsWithoutContent {
    return {
        id: faker.string.uuid(),
        author: {
            name: faker.person.fullName(),
            avatarUrl: faker.image.avatarGitHub(),
        },
        publishedAt: faker.date.between({from: subHours(new Date(), 3), to: new Date()}),
        likes: faker.number.int({ min: 1, max: 13 }),
        currentUserLikedIt: faker.helpers.weightedArrayElement([{weight: .8, value: false}, {weight: .2, value: true}]),
    }
}

function mockPostWithoutContentAndComments(): PostPropsWithoutContentAndComments{
    return {
        id: faker.string.uuid(),
        author: {
            name: faker.person.fullName(),
            avatarUrl: faker.image.avatarGitHub(),
            role: faker.person.jobTitle(),
        },
        publishedAt: faker.date.recent({ days: 3, refDate: subHours(new Date(), 3) }),
    }
}

export function mockPosts(): PostProps[] {
    let currentPostIndex = 0
    let currentCommentIndex = 0

    return Array.from({length: faker.number.int({min: 2, max: 6})}, () => {
        currentPostIndex++
        return {
            ...mockPostWithoutContentAndComments(),
            content: randomPostContents[currentPostIndex],
            comments: Array.from({length: faker.number.int({min: 1, max: 3})}, () => {
                currentCommentIndex++
                return {
                    ...mockCommentWithoutContent(),
                    content: randomComments[currentCommentIndex],
                }
            }).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()),
        }}).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}