exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allStrapiCourse {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const courses = result.data.allStrapiCourse.nodes;

  courses.forEach(course => {
    if (course.slug) {
      createPage({
        path: `/course/${course.slug}`,
        component: require.resolve(`./src/templates/course-template.js`),
        context: {
          slug: course.slug,
        },
      });
    }
  });
};
