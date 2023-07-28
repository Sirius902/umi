#![deny(clippy::all)]

pub mod client;
pub mod server;

pub enum Game {
    Ichi,
    Mao,
}

pub enum Rank {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Skip,
    Reverse,
    Wild,
    Draw2,
    Draw4,
    SwapHands,
}

pub enum Suit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
    Any,
}

pub struct Card {
    pub rank: Rank,
    pub suit: Suit,
}

pub enum Declaration {
    Ichi,
}

pub enum Direction {
    Clockwise,
    CounterClockwise,
}

pub struct Simulator {

}
