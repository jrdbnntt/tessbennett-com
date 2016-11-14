/**
 * Local Pug Data
 */

var locals = {};

locals.baseTitle = 'Tess Bennett';
locals.getTitle = function(subtitle) {
    if (subtitle) {
        return locals.baseTitle + ' - ' + subtitle;
    }
    return locals.baseTitle;
};


locals.works = {
    cindy: {
        title: 'Cindy',
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

    erased_drawings: {
        title: 'Erased drawings',
        imageRootSrc: 'erased_drawings',
        images: [
            {src: 'erased_drawings_no4.jpg', title: 'Erased drawings (no. 4)', description: '2014. Graphite and walnut oil on paper, 18 x 24 inches.'},
            {src: 'erased_drawings_no7.jpg', title: 'Erased drawings (no. 7)', description: '2014. Graphite on paper, 18 x 24 inches.'},
            {src: 'erased_drawings_no6.jpg', title: 'Erased drawings (no. 6)', description: '2014. Graphite on paper, 18 x 24 inches.'},
            {src: 'erased_drawings_no2.jpg', title: 'Erased drawings (no. 2)', description: '2014. Graphite and walnut oil on paper, 18 x 24 inches.'}
        ]
    },

    one_week: {
        title: 'One week',
        imageRootSrc: 'one_week',
        images: [
            {src: 'one_week_no7.jpg', title: 'One week (no. 7)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
            {src: 'one_week_no1.jpg', title: 'One week (no. 1)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
            {src: 'one_week_no4.jpg', title: 'One week (no. 4)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
            {src: 'one_week_no6.jpg', title: 'One week (no. 6)', description: '2014. Watercolor and graphite on paper, 22 x 30 inches.'},
            {src: 'one_week.jpg', title: 'One week', description: '2014. Watercolor and graphite.'}
        ]
    },

    other_works: {
        title: 'Other works',
        imageRootSrc: 'other_works',
        images: [
            {src: 'other_works_noah.jpg', title: 'Noah', description: '2016. Watercolor and graphite on paper, 13 x 16 inches.'},
            {src: 'other_works_everything_is_empty.jpg', title: 'Everything is empty', description: '2015. Screenprint, Loose graphite, 20 x 30 inches.'},
            {src: 'other_works_monoprint.jpg', title: 'Monoprint', description: '2014. Screenprint, 15 x 14 inches.'}
        ]
    },

    transfers: {
        title: 'Transfers',
        imageRootSrc: 'transfers',
        images: [
            {src: 'transfers.jpg', title: 'Transfers', description: '2015. Graphite.'},
            {src: 'transfers_stairs_that_lead_to_nowhere.jpg', title: 'Stairs that lead to nowhere (cropped version)', description: '2015. Graphite on paper, 40 x 60 inches.'},
            {src: 'transfers_empty_picture_frames.jpg', title: 'Empty picture frames (cropped version)', description: '2015. Graphite on paper, 40 x 60 inches.'},
            {src: 'transfers_plates_1.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.'},
            {src: 'transfers_plates_2.jpg', title: 'Transfers (plates)', description: '2015. Graphite on tracing paper.'}
        ]
    },

    untitled: {
        title: 'Untitled (new portraits)',
        imageRootSrc: 'untitled',
        images: [
            {src: 'TODO.jpg', title: 'Untitled', description: '2016. Watercolor and graphite on paper, 51 x # inches.'},
            {src: 'TODO.jpg', title: 'Untitled', description: '2016. Watercolor and graphite on paper, 51 x # inches.'}
        ]
    }
};


module.exports = locals;
