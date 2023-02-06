// /stories/pages/post.stories.jsx

import Layout from "../components/layout";

export default {
  title: "Pages/Home",
  component: Layout,
}

const Template = args => <Layout {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red"
}

export const Layouts = () => <Layout />