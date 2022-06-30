# Contributing

Hello and welcome to the repo of HackGwinnett's blog!

Ready to write your own articles on this blog? Here's how:


1. Fork this repo and clone it on your computer
2. Create a new markdown file (file extension: `.md`) in the `/posts` folder
(not `/pages/posts`).
3. Create the frontmatter of the blog. You must begin and end the frontmatter
with `---`.
    1. Here is a breakdown of the fields:
        1. `title` (required) - your title goes here
        2. `author` (required) - your name goes here
            1. If you don't want to reveal your name, put HackGwinnett
            as the author
        3. `date` (required) - put the date of the article here
        4. `excerpt` (required) - put a brief summary/preview of
        the article here
        5. `cover_image` (required) - path to cover image goes here 
        (please put any images in `public/images/posts`)
        6. `profile_photo` (**optional**) - path to your profile
        picture (please put your profile photo in the
        `public/images/profile_photos` folder)
        7. `draft` (**optional**) - if set to `true`, the post will not
        be rendered (used to create drafts and not render them).
    2. Example frontmatter (you can look at existing posts for more examples)
    ```yaml
    ---
    title: "Cool Article Title"
    author: "Nathan Abraham"
    date: "July 1, 2022"
    excerpt: "Your excerpt goes here. Try not to make it too long."
    cover_image: "/images/posts/coding.jpg"
    draft: false
    ---
    ```
4. Build the site and make sure everything works (you must have 
node version 14+ installed on your computer)
    ```sh
    npm install
    npm run dev
    npm run build
    ```
5. Open up a pull request and we'll review your article!

## Tips

- Leverage the power of markdown to organize content
in your post
    - Use headings and subheadings
    - Use bulleted lists and numbers
    - Use code blocks
- Wrap code blocks in backticks (```) and specify a language to
get syntax highlighting


We can't wait to see what you'll come up with!