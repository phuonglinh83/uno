module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert( 'cards', [
      {card_id: 1,description: 'Red 0',image_address: '/images/red0.jpg'},
      {card_id: 2,description: 'Red 1',image_address: '/images/red1.jpg'},
      {card_id: 3,description: 'Red 2',image_address: '/images/red2.jpg'},
      {card_id: 4,description: 'Red 3',image_address: '/images/red3.jpg'},
      {card_id: 5,description: 'Red 4',image_address: '/images/red4.jpg'},
      {card_id: 6,description: 'Red 5',image_address: '/images/red5.jpg'},
      {card_id: 7,description: 'Red 6',image_address: '/images/red6.jpg'},
      {card_id: 8,description: 'Red 7',image_address: '/images/red7.jpg'},
      {card_id: 9,description: 'Red 8',image_address: '/images/red8.jpg'},
      {card_id: 10,description: 'Red 9',image_address: '/images/red9.jpg'},
      {card_id: 11,description: 'Red 1',image_address: '/images/red1.jpg'},
      {card_id: 12,description: 'Red 2',image_address: '/images/red2.jpg'},
      {card_id: 13,description: 'Red 3',image_address: '/images/red3.jpg'},
      {card_id: 14,description: 'Red 4',image_address: '/images/red4.jpg'},
      {card_id: 15,description: 'Red 5',image_address: '/images/red5.jpg'},
      {card_id: 16,description: 'Red 6',image_address: '/images/red6.jpg'},
      {card_id: 17,description: 'Red 7',image_address: '/images/red7.jpg'},
      {card_id: 18,description: 'Red 8',image_address: '/images/red8.jpg'},
      {card_id: 19,description: 'Red 9',image_address: '/images/red9.jpg'},
      {card_id: 20,description: 'Red draw two',image_address: '/images/red_draw_two.jpg'},
      {card_id: 21,description: 'Red draw two',image_address: '/images/red_draw_two.jpg'},
      {card_id: 22,description: 'Red skip',image_address: '/images/red_skip.jpg'},
      {card_id: 23,description: 'Red skip',image_address: '/images/red_skip.jpg'},
      {card_id: 24,description: 'Red reverse',image_address: '/images/red_reverse.jpg'},
      {card_id: 25,description: 'Red reverse',image_address: '/images/red_reverse.jpg'},

      {card_id: 26,description: 'Green 0',image_address: '/images/green0.jpg'},
      {card_id: 27,description: 'Green 1',image_address: '/images/green1.jpg'},
      {card_id: 28,description: 'Green 2',image_address: '/images/green2.jpg'},
      {card_id: 29,description: 'Green 3',image_address: '/images/green3.jpg'},
      {card_id: 30,description: 'Green 4',image_address: '/images/green4.jpg'},
      {card_id: 31,description: 'Green 5',image_address: '/images/green5.jpg'},
      {card_id: 32,description: 'Green 6',image_address: '/images/green6.jpg'},
      {card_id: 33,description: 'Green 7',image_address: '/images/green7.jpg'},
      {card_id: 34,description: 'Green 8',image_address: '/images/green8.jpg'},
      {card_id: 35,description: 'Green 1',image_address: '/images/green1.jpg'},
      {card_id: 36,description: 'Green 2',image_address: '/images/green2.jpg'},
      {card_id: 37,description: 'Green 3',image_address: '/images/green3.jpg'},
      {card_id: 38,description: 'Green 4',image_address: '/images/green4.jpg'},
      {card_id: 39,description: 'Green 5',image_address: '/images/green5.jpg'},
      {card_id: 40,description: 'Green 6',image_address: '/images/green6.jpg'},
      {card_id: 41,description: 'Green 7',image_address: '/images/green7.jpg'},
      {card_id: 42,description: 'Green 8',image_address: '/images/green8.jpg'},
      {card_id: 43,description: 'Green 9',image_address: '/images/green9.jpg'},
      {card_id: 44,description: 'Green 9',image_address: '/images/green9.jpg'},
      {card_id: 45,description: 'Green draw two',image_address: '/images/green_draw_two.jpg'},
      {card_id: 46,description: 'Green draw two',image_address: '/images/green_draw_two.jpg'},
      {card_id: 47,description: 'Green skip',image_address: '/images/green_skip.jpg'},
      {card_id: 48,description: 'Green skip',image_address: '/images/green_skip.jpg'},
      {card_id: 49,description: 'Green reverse',image_address: '/images/green_reverse.jpg'},
      {card_id: 50,description: 'Green reverse',image_address: '/images/green_reverse.jpg'},

      {card_id: 51,description: 'Yellow 0',image_address: '/images/yellow0.jpg'},
      {card_id: 52,description: 'Yellow 1',image_address: '/images/yellow1.jpg'},
      {card_id: 53,description: 'Yellow 2',image_address: '/images/yellow2.jpg'},
      {card_id: 54,description: 'Yellow 3',image_address: '/images/yellow3.jpg'},
      {card_id: 55,description: 'Yellow 4',image_address: '/images/yellow4.jpg'},
      {card_id: 56,description: 'Yellow 5',image_address: '/images/yellow5.jpg'},
      {card_id: 57,description: 'Yellow 6',image_address: '/images/yellow6.jpg'},
      {card_id: 58,description: 'Yellow 7',image_address: '/images/yellow7.jpg'},
      {card_id: 59,description: 'Yellow 8',image_address: '/images/yellow8.jpg'},
      {card_id: 60,description: 'Yellow 9',image_address: '/images/yellow9.jpg'},
      {card_id: 61,description: 'Yellow 1',image_address: '/images/yellow1.jpg'},
      {card_id: 62,description: 'Yellow 2',image_address: '/images/yellow2.jpg'},
      {card_id: 63,description: 'Yellow 3',image_address: '/images/yellow3.jpg'},
      {card_id: 64,description: 'Yellow 4',image_address: '/images/yellow4.jpg'},
      {card_id: 65,description: 'Yellow 5',image_address: '/images/yellow5.jpg'},
      {card_id: 66,description: 'Yellow 6',image_address: '/images/yellow6.jpg'},
      {card_id: 67,description: 'Yellow 7',image_address: '/images/yellow7.jpg'},
      {card_id: 68,description: 'Yellow 8',image_address: '/images/yellow8.jpg'},
      {card_id: 69,description: 'Yellow 9',image_address: '/images/yellow9.jpg'},
      {card_id: 70,description: 'Yellow draw two',image_address: '/images/yellow_draw_two.jpg'},
      {card_id: 71,description: 'Yellow draw two',image_address: '/images/yellow_draw_two.jpg'},
      {card_id: 72,description: 'Yellow skip',image_address: '/images/yellow_skip.jpg'},
      {card_id: 73,description: 'Yellow skip',image_address: '/images/yellow_skip.jpg'},
      {card_id: 74,description: 'Yellow reverse',image_address: '/images/yellow_reverse.jpg'},
      {card_id: 75,description: 'Yellow reverse',image_address: '/images/yellow_reverse.jpg'},

      {card_id: 76,description: 'Blue 0',image_address: '/images/blue0.jpg'},
      {card_id: 77,description: 'Blue 1',image_address: '/images/blue1.jpg'},
      {card_id: 78,description: 'Blue 2',image_address: '/images/blue2.jpg'},
      {card_id: 79,description: 'Blue 3',image_address: '/images/blue3.jpg'},
      {card_id: 80,description: 'Blue 4',image_address: '/images/blue4.jpg'},
      {card_id: 81,description: 'Blue 5',image_address: '/images/blue5.jpg'},
      {card_id: 82,description: 'Blue 6',image_address: '/images/blue6.jpg'},
      {card_id: 83,description: 'Blue 7',image_address: '/images/blue7.jpg'},
      {card_id: 84,description: 'Blue 8',image_address: '/images/blue8.jpg'},
      {card_id: 85,description: 'Blue 9',image_address: '/images/blue9.jpg'},
      {card_id: 86,description: 'Blue 1',image_address: '/images/blue1.jpg'},
      {card_id: 87,description: 'Blue 2',image_address: '/images/blue2.jpg'},
      {card_id: 88,description: 'Blue 3',image_address: '/images/blue3.jpg'},
      {card_id: 89,description: 'Blue 4',image_address: '/images/blue4.jpg'},
      {card_id: 90,description: 'Blue 5',image_address: '/images/blue5.jpg'},
      {card_id: 91,description: 'Blue 6',image_address: '/images/blue6.jpg'},
      {card_id: 92,description: 'Blue 7',image_address: '/images/blue7.jpg'},
      {card_id: 93,description: 'Blue 8',image_address: '/images/blue8.jpg'},
      {card_id: 94,description: 'Blue 9',image_address: '/images/blue9.jpg'},
      {card_id: 95,description: 'Blue draw two',image_address: '/images/blue_draw_two.jpg'},
      {card_id: 96,description: 'Blue draw two',image_address: '/images/blue_draw_two.jpg'},
      {card_id: 97,description: 'Blue skip',image_address: '/images/blue_skip.jpg'},
      {card_id: 98,description: 'Blue skip',image_address: '/images/blue_skip.jpg'},
      {card_id: 99,description: 'Blue reverse',image_address: '/images/blue_reverse.jpg'},
      {card_id: 100,description: 'Blue reverse',image_address: '/images/blue_reverse.jpg'},

      {card_id: 101,description: 'Wild',image_address: '/images/wild.jpg'},
      {card_id: 102,description: 'Wild',image_address: '/images/wild.jpg'},
      {card_id: 103,description: 'Wild',image_address: '/images/wild.jpg'},
      {card_id: 104,description: 'Wild',image_address: '/images/wild.jpg'},
      {card_id: 105,description: 'Wild draw four',image_address: '/images/wild_draw_four.jpg'},
      {card_id: 106,description: 'Wild draw four',image_address: '/images/wild_draw_four.jpg'},
      {card_id: 107,description: 'Wild draw four',image_address: '/images/wild_draw_four.jpg'},
      {card_id: 108,description: 'Wild draw four',image_address: '/images/wild_draw_four.jpg'}
    ], {});
  },
  down: (queryInterface, Sequelize) => {

  }
};