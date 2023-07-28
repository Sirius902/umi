use crate::{Card, Declaration, Direction, Game, Suit};

pub struct PlayerState {
    pub id: uuid::Uuid,
    pub display_name: String,
    pub hand: Vec<Option<Card>>,
    pub declared: Option<Declaration>,
}

// TODO: Mao custom rules
pub struct GameState {
    pub game: Game,
    pub players: Vec<PlayerState>,
    pub turn: usize,
    pub turn_direction: Direction,
    pub deck_size: usize,
    pub discard_top: Card,
    pub current_suit: Suit,
    pub chat_log: Vec<String>,
}

// TODO: StartGame, EndGame, ReshuffleCards
pub enum StateUpdate {
    DrawCards(usize, Vec<Option<Card>>),
    PlayCard(usize, Card),
    RecallCard(usize, Card),
    SkipPlayer(usize),
    ChangeDirection(Direction),
    AskSuit(usize),
    ChangeSuit(usize, Suit),
}

pub enum PlayerAction {
    Declare(Declaration),
    SelectSuit(Suit),
    SelectDraw,
    SelectDiscard,
    SelectHand(uuid::Uuid),
    SelectCard(usize),
    SendChatMessage(String),
}
