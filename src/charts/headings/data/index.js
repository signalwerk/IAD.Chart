const data = {
  W3C: {
    title: "W3C Recommendation – HTML 5.2",
    date: "14 December 2017",
    source: "https://www.w3.org/TR/html5/rendering.html#sections-and-headings",
    fontSize: [
      { name: "h1", order: 1, value: 2.0 },
      { name: "h2", order: 2, value: 1.5 },
      { name: "h3", order: 3, value: 1.17 },
      { name: "h4", order: 4, value: 1.0 },
      { name: "h5", order: 5, value: 0.83 },
      { name: "h6", order: 6, value: 0.67 },
    ],
  },

  bootstrap4: {
    title: "Bootstrap 4.1",
    date: "20.9.2018",
    source: "https://getbootstrap.com/docs/4.1/content/typography/",
    fontSize: [
      { name: "h1", order: 1, value: 2.5 },
      { name: "h2", order: 2, value: 2 },
      { name: "h3", order: 3, value: 1.75 },
      { name: "h4", order: 4, value: 1.5 },
      { name: "h5", order: 5, value: 1.25 },
      { name: "h6", order: 6, value: 1 },
    ],
  },

  bootstrap5: {
    title: "Bootstrap 5.1",
    date: "17.11.2021",
    source: "https://getbootstrap.com/docs/5.1/content/typography/",
    fontSize: [
      { name: "h1", order: 1, value: 2.5 },
      { name: "h2", order: 2, value: 2 },
      { name: "h3", order: 3, value: 1.75 },
      { name: "h4", order: 4, value: 1.5 },
      { name: "h5", order: 5, value: 1.25 },
      { name: "h6", order: 6, value: 1 },
    ],
  },

  foundation5: {
    title: "Foundation 5.5.3",
    date: "20.9.2018",
    source:
      "https://foundation.zurb.com/sites/docs/v/5.5.3/components/typography.html",

    fontSize: {
      desktop: [
        { name: "h1", order: 1, value: 2.44444 },
        { name: "h2", order: 2, value: 2.05556 },
        { name: "h3", order: 3, value: 1.5 },
        { name: "h4", order: 4, value: 1.27778 },
        { name: "h5", order: 5, value: 1.0 },
        { name: "h6", order: 6, value: 1.0 },
      ],
      mobile: [
        { name: "h1", order: 1, value: 1.88889 },
        { name: "h2", order: 2, value: 1.5 },
        { name: "h3", order: 3, value: 1.22222 },
        { name: "h4", order: 4, value: 1.0 },
        { name: "h5", order: 5, value: 1.0 },
        { name: "h6", order: 6, value: 1.0 },
      ],
    },
  },
  foundation6: {
    title: "Foundation 6.7.5",
    date: "17.11.2021",
    source: "https://get.foundation/sites/docs/typography-base.html",

    fontSize: {
      desktop: [
        { name: "h1", order: 1, value: 48 / 16 },
        { name: "h2", order: 2, value: 40 / 16 },
        { name: "h3", order: 3, value: 31 / 16 },
        { name: "h4", order: 4, value: 25 / 16 },
        { name: "h5", order: 5, value: 20 / 16 },
        { name: "h6", order: 6, value: 16 / 16 },
      ],
      mobile: [
        { name: "h1", order: 1, value: 24 / 16 },
        { name: "h2", order: 2, value: 20 / 16 },
        { name: "h3", order: 3, value: 19 / 16 },
        { name: "h4", order: 4, value: 18 / 16 },
        { name: "h5", order: 5, value: 17 / 16 },
        { name: "h6", order: 6, value: 16 / 16 },
      ],
    },
  },
};

export default data;
