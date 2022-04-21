// Task 12a
const { Breadditor, Post, sequelize } = require('./models');

// Task 12b
async function createBreadditor(name, email, country, password) {
    const breadditor = await Breadditor.create({
        name: name,
        email: email,
        country: country,
        password: password
    })
    console.log(breadditor)
    // return breadditor
}

// createBreadditor('Javier', 'javi@javi.net', 'Arctic', 'mod3isbestmod')

// Task 12c
async function buildPost(breadditorId, pinned, title, content, subId) {
    const post = Post.build({
        breadditorId,
        // breadditorId: breadditorId
        pinned,
        title,
        content,
        subId
    })

    await post.save()

    console.log(post);
}

// buildPost(2, false, 'This is a test', 'BANANA????', 1)