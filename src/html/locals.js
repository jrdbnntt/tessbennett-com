/**
 * Local Pug Data
 */

var locals = {}

locals.baseTitle = 'Tess Bennett'
locals.getTitle = function (subtitle) {
  if (subtitle) {
    return locals.baseTitle + ' - ' + subtitle
  }
  return locals.baseTitle
}

locals.works = {
  pair: {
    title: 'Pair',
    link: '/works/pair.html',
    imageRootSrc: 'pair',
    images: [
      {src: 'clouds_looked_like.jpg', title: 'what clouds looked like', description: '2016. Watercolor and graphite on paper, 51 x 78 inches.'},
      {src: 'time_spent.jpg', title: 'time spent walking home', description: '2016. Watercolor and graphite on paper, 51 x 88 inches.'},
      {src: 'clouds_looked_like_detail_one.jpg', beforeTitle: 'Detail of', title: 'what clouds looked like'},
      {src: 'clouds_looked_like_detail_two.jpg', beforeTitle: 'Detail of', title: 'what clouds looked like'},
      {src: 'time_spent_detail_one.jpg', beforeTitle: 'Detail of', title: 'time spent walking home'},
      {src: 'time_spent_detail_two.jpg', beforeTitle: 'Detail of', title: 'time spent walking home'},
      {src: 'pair.jpg'}
    ]
  },

  cindy: {
    title: 'Cindy',
    link: '/works/cindy.html',
    imageRootSrc: 'cindy',
    images: [
      {src: 'cindy_no5.jpg', title: 'Cindy (no. 5)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.'},
      {src: 'cindy_no3.jpg', title: 'Cindy (no. 3)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.'},
      {src: 'cindy_no4.jpg', title: 'Cindy (no. 4)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.'},
      {src: 'cindy_no2.jpg', title: 'Cindy (no. 2)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.'},
      {src: 'cindy_no1.jpg', title: 'Cindy (no. 1)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.'},
      {src: 'cindy.jpg', title: 'Cindy', description: '2015. Watercolor and graphite on paper.'}
    ]
  },

  transfers: {
    title: 'Transfers',
    link: '/works/transfers.html',
    imageRootSrc: 'transfers',
    images: [
      {src: 'transfers.jpg', title: 'Transfers', description: '2015. Graphite transfers.'},
      {src: 'transfers_stairs_that_lead_to_nowhere.jpg', title: 'Stairs that lead to nowhere (cropped version)', description: '2015. Graphite transfers on paper, 40 x 60 inches.'},
      {src: 'transfers_empty_picture_frames.jpg', title: 'Empty frames that hang in the yard', description: '2015. Graphite transfers on paper, 40 x 60 inches.'},
      {src: 'transfers_plates_1.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.'},
      {src: 'transfers_plates_2.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.'}
    ]
  },

  one_week: {
    title: 'One week',
    link: '/works/one_week.html',
    imageRootSrc: 'one_week',
    images: [
      {src: 'one_week_no7.jpg', title: 'One week (no. 7)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
      {src: 'one_week_no1.jpg', title: 'One week (no. 1)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
      {src: 'one_week_no4.jpg', title: 'One week (no. 4)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
      {src: 'one_week_no6.jpg', title: 'One week (no. 6)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
      {src: 'one_week.jpg', title: 'One week', description: '2014. Watercolor and graphite.'}
    ]
  },

  erased_drawings: {
    title: 'Erased drawings',
    link: '/works/erased_drawings.html',
    imageRootSrc: 'erased_drawings',
    images: [
      {src: 'erased_drawings_no4.jpg', title: 'Erased drawings (no. 4)', description: '2014. Graphite, tape, and walnut oil on paper, 18 x 24 inches.'},
      {src: 'erased_drawings_no7.jpg', title: 'Erased drawings (no. 7)', description: '2014. Graphite and tape on paper, 18 x 24 inches.'},
      {src: 'erased_drawings_no6.jpg', title: 'Erased drawings (no. 6)', description: '2014. Graphite and tape on paper, 18 x 24 inches.'},
      {src: 'erased_drawings_no2.jpg', title: 'Erased drawings (no. 2)', description: '2014. Graphite, tape, and walnut oil on paper, 18 x 24 inches.'}
    ]
  },

  other_works: {
    title: 'Other works',
    link: '/works/other_works.html',
    imageRootSrc: 'other_works',
    images: [
      {src: 'other_works_floating_noah.jpg', title: 'Floating Noah', description: '2017. Oil and graphite on canvas, 20 x 16 inches.'},
      {src: 'other_works_one_year.jpg', title: 'One year and four months', description: '2017. Graphite transfers and colored pencil on paper, 19 x 22 inches.'},
      {src: 'other_works_moonrise.jpg', title: 'Moonrise', description: '2017. Graphite transfer on paper, 16 x 20 inches.'},
      {src: 'other_works_noah.jpg', title: 'Noah', description: '2016. Watercolor and graphite on paper, 13 x 16 inches.'},
      {src: 'other_works_everything_is_empty.jpg', title: 'Everything is empty', description: '2015. Screenprint, Loose graphite, 20 x 30 inches.'},
      {src: 'other_works_monoprint.jpg', title: 'Monoprint', description: '2014. Screenprint, 15 x 14 inches.'}
    ]
  }

}

module.exports = locals
