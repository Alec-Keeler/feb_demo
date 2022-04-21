// Task 12a
const { Breadditor, Post, Sequelize: {Op} } = require('./models');

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

// Task 13a
async function findBreadditor(breadditorId) { // '1'
    const breadditor = await Breadditor.findByPk(breadditorId)
    console.log(breadditor.name)
}

// findBreadditor(1)
// Task 13c
async function findUserByEmail(email) {
    const breadditor = await Breadditor.findOne({
        where: {
            email
        }
    })
    console.log(JSON.stringify(breadditor, null, 2))
}

// findUserByEmail('ray@ray.ray')

// Task 13b
async function findAllPosts() {
    const posts = await Post.findAll()
    console.log(JSON.stringify(posts, null, 2))
    console.log(posts[0].title)
}

// findAllPosts()

// Task 13d
async function findAllPostsForSub(subId) {
    const posts = await Post.findAll({
        where: {
            subId,
            // Task 13e
            breadditorId: 1
        }
    })

    console.log(JSON.stringify(posts, null, 2))
}

// findAllPostsForSub(1)

// Task 13f
async function searchPosts(searchTerm) {
    const posts = await Post.findAll({
        where: {
            title: {
                [Op.iLike]: `%${searchTerm}%`
            }
        }
    })

    console.log(JSON.stringify(posts, null, 2))
}

// searchPosts('bread')

// Task 13g
async function orderResults() {
    const posts = await Post.findAll({
        order: [['subId', 'DESC']],
        limit: 2
    })

    console.log(JSON.stringify(posts, null, 2))
}

// orderResults()