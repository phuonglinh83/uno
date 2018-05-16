const express = require('express');
const router = express.Router();
const requireAuth = require('../auth/requireAuth');
const io = require('../socket');

const Games = require('../db/games');

// host/game/1
router.get('/:game_id', requireAuth, function(req, res, next) {
  console.log(req.user);
  res.render('game', { table:"true", title: 'Playing', game_id: req.params.game_id});
});

// host/game/1/details
router.get('/:game_id/details', function(req, res, next) {
// router.get('/:game_id/players', requireAuth, function(req, res, next) {
  console.log("get all users");
  Games.get(req.params.game_id).then (game => {
    console.log(game);
    Games.get_users(req.params.game_id).then (users => {
      console.log(users);
      res.status(200).json({game_status : game.status, current_player: game.current_player,
      users: users});
    }).catch( error => console.log("Error in get_user_cards: ",error));
  }).catch( error=> console.log("ERROR: ",error));
  // res.render('game_table', { title: 'Playing', game_id: req.params.id});
});

// host/game/1/player/1/cards
router.get('/:game_id/player/:player_id/cards', requireAuth, function(req, res, next) {
  console.log(req.params);
  Games.get_user_cards(req.params.game_id, req.params.user_id).then ( cards => {
    res.status(200).json(cards);
  });
});

router.post('/:game_id/join', requireAuth, function(req, res, next) {
  console.log(req.params);
  console.log(req.user);
  Games.get_game_status_count(req.params.game_id).then(result => {
    console.log("GET GAME STATUS");
    console.log(result);
    if (result.game_status === 'OPEN') {
      Games.join_game(req.params.game_id, req.user.user_id, ++result.cnt).then(insert => {
        console.log("successfully joined the game");
        // res.redirect('/lobby');
        res.redirect('/game/' + req.body.game_id + '/waiting');
      }).catch(error => {
        console.log("Error joining the game: ");
        console.log(error);
        res.redirect('/lobby');
      });
    }
  }).catch(error => {
    console.log("Error get game status");
    console.log(error);
    res.redirect('/lobby');
  });
});

router.get('/:game_id/waiting', requireAuth, function(req, res, next) {
  Games.get_game_state(req.params.game_id).then (game => {
    const can_start = (game.host_id === req.user.user_id);
    res.render('game_waiting', { title: 'Waiting room', game_id:req.params.game_id, can_start: can_start});
  }).catch(error => {
    console.log("Error query users: " + error);
    res.redirect('/lobby');
  });
});

router.get('/:game_id/players', function(req, res, next) {
  Games.get_users(req.params.game_id).then (users => {
    console.log(users);
    res.status(200).json(users);
  }).catch( error => console.log("Error in get_users: ", error));
// router.get('/:game_id/players', requireAuth, function(req, res, next) {
  // Games.get(req.params.game_id).then (game => {
  //   console.log(game);
  //   Games.get_users(req.params.game_id).then (users => {
  //     console.log(users);
  //     res.status(200).json({game_status : game.status, current_player: game.current_player,
  //     users: users});
  //   }).catch( error => console.log("Error in get_user_cards: ",error));
  // }).catch( error=> console.log("ERROR: ",error));
  // res.render('game_table', { title: 'Playing', game_id: req.params.id});
});

// host/game/1/play/12
// player plays a card
router.post(':game_id/play/:card_id',requireAuth, function(req,res,next){
  // check for correct user/turn
  // check for correct game_status
  // check for playable card
  // check for card_id in hand
  // change game status to busy (playing)

  // remove card id from player
  // play card function( card_id )
    // add card_id to discard/active
    // if single card remains in hand and no Uno call, force draw 2
    // apply card effects to game
      // update game_id active_color
      // if numbered
        // pass turn
        // change game status to 'waiting for play'
      // if skip
        // pass turn twice
        // change game status to 'waiting for play'
      // if reverse
        // reverse turn order (1,-1)
        // pass turn
        // change game status to 'waiting for play'
      // if draw 2
        // then pass turn
        // force draw 2
        // change game status to 'waiting for play'
      // if wild or wild 4
        // change game status to 'waiting for color decision'
        // emit color decision
    // end function

  // check for win condition
  // emit new game_state
});

// host/game/1/draw/
// player choses to draw a card
router.post('/:game_id/draw/',requireAuth,function(req,res,next){
  // check for correct user/turn
  // check for correct game status
  // change game status to busy(playing)

  // draw from deck
  // check if drawn card is playable

  // if not playable
    // add to player hand
    // pass turn
    // change game status to 'waiting for play'
  // else
    // save card_id in game_id
    // change game status to 'waiting for draw decision'
  // emit game_state
});

// host/game/1/playDrawn/
// player choses to play drawn card
router.post('/:game_id/playDrawn/',requireAuth,function(req,res,next){
  // check for correct user/turn
  // check for correct game status
  // change game status to busy(playing)

  // get card_id from game_state
  // play card function(card_id)
    // add card_id to discard/active
    // if single card remains in hand and no Uno call, force draw 2
    // apply card effects to game
      // update game_id active_color
      // if numbered
        // pass turn
        // change game_status to 'waiting for play'
      // if skip
        // pass turn twice
        // change game_status to 'waiting for play'
      // if reverse
        // reverse turn order (1,-1)
        // pass turn
        // change game_status to 'waiting for play'
      // if draw 2
        // then pass turn
        // force draw 2
        // change game_status to 'waiting for play'
      // if wild or wild 4
        // change game_status to 'waiting for color decision'
        // emit color decision
    // end function

    // emit game_state
});

// host/game/1/keep
// player choses to keep drawn card
router.post('/:game_id/keep/',requireAuth,function(req,res,next){
  // check for correct user/turn
  // check for correct game status
  // change game status to busy(playing)

  // move card_id from game_id to player_hand
  // pass turn
  // change game status to 'waiting for play'
  // emit game_state
});

// host.game/1/color
// player choses a color for their wild card
router.post('/:game_id/color/:color',requireAuth,function(req,res,next){
  // check for correct user/turn
  // check for correct game status
  // change game status to busy(playing)

  // change color
  // pass turn
  // if discard/active is 'wild 4'
    // force draw 4
  // pass turn (skip)
  // change game status to 'waiting for play'
  // emit game_state
});

router.post('/game_id/chat',requireAuth, (req, res, next) => {
    let {message} = request.body;
    let game_id = request.params.game_id;
    let screen_name = request.user.screen_name;

    console.log('game route chat: ' + message);

    request.app.io.of('/game/${game_id}').emit('message', {
        game_id,
        message,
        screen_name
    });
    response.sendStatus(200);
});

module.exports = router;
