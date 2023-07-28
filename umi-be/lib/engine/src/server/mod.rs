use std::time::Instant;

use crate::{Card, Declaration, Direction, Game, Suit};

pub struct PlayerState {
    pub id: uuid::Uuid,
    pub display_name: String,
    pub hand: Vec<Card>,
    pub declared: Option<Declaration>,
}

// TODO: Mao custom rules
pub struct GameState {
    pub game: Game,
    pub players: Vec<PlayerState>,
    pub turn: usize,
    pub turn_direction: Direction,
    pub deck: Vec<Card>,
    pub discard: Vec<Card>,
    pub current_suit: Suit,
    pub chat_log: Vec<ChatMessage>,
}

pub struct ChatMessage {
    pub sender_id: uuid::Uuid,
    pub message: String,
    pub timestamp: Instant,
}
