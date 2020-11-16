/**
 * Local Pug Data
 */

var locals = {}

locals.baseTitle = 'Ben Bennett'
locals.getTitle = function (subtitle) {
  if (subtitle) {
    return locals.baseTitle + ' - ' + subtitle
  }
  return locals.baseTitle
}

locals.works = {
  waiting_room: {
    title: 'Self portrait (in a waiting room)',
    link: '/works/waiting_room.html',
    imageRootSrc: 'waiting_room',
    images: [
      { src: 'waiting_room.jpg', title: 'Self portrait (in a waiting room)', description: '2018. Image transfer and graphite on paper, 16 x 20 inches.' }
    ]
  },

  this_hole: {
    title: 'This hole has a name',
    link: '/works/this_hole.html',
    imageRootSrc: 'this_hole',
    images: [
      { src: 'this_hole.jpg', title: 'This hole has a name', description: '2018. Graphite, watercolor, tracing paper, and tape on paper, 38 x 30 inches.' }
    ]
  },

  ezra: {
    title: 'Ezra (and trash yard)',
    link: '/works/ezra.html',
    imageRootSrc: 'ezra',
    images: [
      { src: 'ezra.jpg', title: 'Ezra (and trash yard)', description: '2017. Watercolor and graphite on paper, 41 x 30  inches.' },
      { src: 'ezra_detail.jpg', beforeTitle: 'Detail of', title: 'Ezra (and trash yard)' }
    ]
  },

  pair: {
    title: 'Pair',
    link: '/works/pair.html',
    imageRootSrc: 'pair',
    images: [
      { src: 'pair.jpg' },
      { src: 'clouds_looked_like.jpg', title: 'what clouds looked like', description: '2016. Watercolor and graphite on paper, 51 x 78 inches.' },
      { src: 'time_spent.jpg', title: 'time spent walking home', description: '2016. Watercolor and graphite on paper, 51 x 88 inches.' },
      { src: 'clouds_looked_like_detail_one.jpg', beforeTitle: 'Detail of', title: 'what clouds looked like' }
    ]
  },

  cindy: {
    title: 'Cindy',
    link: '/works/cindy.html',
    imageRootSrc: 'cindy',
    images: [
      { src: 'cindy_no5.jpg', title: 'Cindy (no. 5)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy_no3.jpg', title: 'Cindy (no. 3)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy_no4.jpg', title: 'Cindy (no. 4)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy_no2.jpg', title: 'Cindy (no. 2)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy_no1.jpg', title: 'Cindy (no. 1)', description: '2015. Watercolor and graphite on paper, 25 x 40 inches.' },
      { src: 'cindy.jpg', title: 'Cindy', description: '2015. Watercolor and graphite on paper.' }
    ]
  },

  transfers: {
    title: 'Transfers',
    link: '/works/transfers.html',
    imageRootSrc: 'transfers',
    images: [
      { src: 'transfers_plates_1.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.' },
      { src: 'transfers_plates_2.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.' },
      { src: 'transfers.jpg', title: 'Transfers', description: '2015. Graphite transfers.' },
      { src: 'transfers_stairs_that_lead_to_nowhere.jpg', title: 'Stairs that lead to nowhere (cropped version)', description: '2015. Graphite transfers on paper, 40 x 60 inches.' },
      { src: 'transfers_empty_picture_frames.jpg', title: 'Empty frames that hang in the yard', description: '2015. Graphite transfers on paper, 40 x 60 inches.' },

    ]
  },

  one_week: {
    title: 'One week',
    link: '/works/one_week.html',
    imageRootSrc: 'one_week',
    images: [
      { src: 'one_week_no7.jpg', title: 'One week (no. 7)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.' },
      { src: 'one_week_no1.jpg', title: 'One week (no. 1)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.' },
      { src: 'one_week.jpg', title: 'One week', description: '2014. Watercolor and graphite.' }
    ]
  },

  erased_drawings: {
    title: 'Erased drawings',
    link: '/works/erased_drawings.html',
    imageRootSrc: 'erased_drawings',
    images: [
      { src: 'erased_drawings_no4.jpg', title: 'Erased drawings (no. 4)', description: '2014. Graphite, tape, and walnut oil on paper, 18 x 24 inches.' },
      { src: 'erased_drawings_no7.jpg', title: 'Erased drawings (no. 7)', description: '2014. Graphite and tape on paper, 18 x 24 inches.' },
      { src: 'erased_drawings_no6.jpg', title: 'Erased drawings (no. 6)', description: '2014. Graphite and tape on paper, 18 x 24 inches.' },
      { src: 'erased_drawings_no2.jpg', title: 'Erased drawings (no. 2)', description: '2014. Graphite, tape, and walnut oil on paper, 18 x 24 inches.' }
    ]
  },

  other_works: {
    title: 'This and that',
    link: '/works/other_works.html',
    imageRootSrc: 'other_works',
    images: [
      { src: 'other_works_stripes.jpg', title: 'Untitled stripes', description: '2018. Watercolor and gouache on paper, 22 x 30 inches.' },
      { src: 'other_works_virginia_woolf.jpg', title: 'Self portrait (with Virginia Woolf)', description: '2018. Graphite and watercolor on paper, 16 x 20 inches.' },
      { src: 'other_works_tonet.jpg', title: 'Tonet', description: '2017. Watercolor, gouache, and graphite on paper, 25 x 40 inches.' },
      { src: 'second_to_last.jpg', title: 'second to last', description: ' 2017. Watercolor and graphite on paper, 16 x 20 inches.' },
      { src: 'other_works_floating_noah.jpg', title: 'Floating Noah', description: '2017. Oil and graphite on canvas, 20 x 16 inches.' },
      { src: 'other_works_moonrise.jpg', title: 'Moonrise', description: '2017. Graphite transfer on paper, 16 x 20 inches.' },
      { src: 'other_works_noah.jpg', title: 'Noah', description: '2016. Watercolor and graphite on paper, 13 x 16 inches.' }
    ]
  }

}

module.exports = locals
