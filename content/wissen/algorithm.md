# Decoding the Algorithm

Have you ever thought about _how the algorithm is coded?_

I guess you’ve never paid enough attention to the details. I’m going to start a series and reveal a small portion of how price delivery works and how we can take advantage of it.

## Chapter 1

For market makers, it's impossible to manually control the prices of all markets, assets, and timeframes.

For this reason, in the 80s, an algorithm was invented to deliver prices efficiently in the markets.
The market makers only need to input certain values, specify the program in which they want the price to execute the movement, and set the speed.

Since the algorithm is coded the same way, it makes the price fractal across all timeframes—annual, weekly, and even 15-second charts.

The only thing that changes is the time it takes to form the candle.⚡️

![algo-1_1](/images/algo-1_1.jpeg)

In the first chapter, I’ll discuss the efficiency of price delivery. Do you notice any visual differences between the two charts?🪞

And if I tell you that one is a weekly chart while the other is a 1 minute chart, what do we notice in both charts when creating a swing high or low and reversing?

![algo-1_2](/images/algo-1_2.jpeg)
![algo-1_3](/images/algo-1_3.jpeg)

Before starting a bearish move, the algorithm will create a new candle that mitigates the last high to enable a downward move.

The intention is to reduce the maximum number of people making money while shorting and to hunt for the maximum number of stops from early sellers.

The opposite occurs in a bullish market.

![algo-1_4](/images/algo-1_4.jpeg)

How can we identify a swing and that the price will reverse?

🥷🏼In this chapter, I won’t reveal this secret. Just think about aspects like time and simple things such as candles, highs, and lows.

As mentioned earlier, this occurs in all timeframes you can imagine.
For my trading style, it doesn’t make sense to wait for a monthly or weekly high or low to be mitigated, or for a 1 minute or 15-second candle to be mitigated… But, what if we wait for the 1 day and 1h candle to be mitigated?

![algo-1_5](/images/algo-1_5.jpeg)

So, how can we take advantage of this?

When a swing high or low is created, we wait for the next new candle that mitigates the opposite side of the next movement and then enter our trade.

This is how we can trade turtle soup setups with such precision and capitalize throughout the entire movement.

![algo-1_6](/images/algo-1_6.jpeg)

What happens with swings where the previous candle is not mitigated? Then a failure swing occurs.

![algo-1_7](/images/algo-1_7.jpeg)

To conclude, we wait for a raid of the previous HTF candle and when it's mitigated we go to LTF and wait for exactly same protocol.

![algo-1_8](/images/algo-1_8.jpeg)

## Chapter 2

In this chapter, I will talk about:

⏲️TIME-BASED ENTRIES⏲️

I'm sure you've often wondered, what is the best time to enter a trade? Let's find out!

Before we begin, you should know that the market is divided into several time zones: Asia, Europe, and America.

Our focus for trading Forex will be on the London open, London lunch, and New York AM session.

This is probably the first time you've seen sessions split by these specific hours. You have two options: either you trust what I'm telling you, or you use the killzones that everyone else uses, and you'll get the results that everyone else gets. ;)

![algo-2_1](/images/algo-2_1.jpeg)

If we split the 24 hours of the day, we’ll find that there are **key hours in the price action.** I won’t go into more detail on this point, but if we want to align sessions with the **available time frames**, we’ll see that the **6H**, **4H**, and **1H** candles are where we will find our best entries.

If we overlay the 6-hour chart, the candles that coincide with our sessions open at 23:00, 05:00, and 11:00.

If we overlay the 4-hour chart, the candles that coincide with our sessions are at 01:00, 05:00, and 09:00.

![algo-2_2](/images/algo-2_2.jpeg)

Once we know this, you should also know that **each individual candle** can be treated like a daily candle, with its **PO3, OHLC / OLHC.**

These three candles (01:00, 05:00, 09:00) make up the body of a daily candle, where one of these three candles will represent **accumulation**, **manipulation**, and **expansion**.

![algo-2_3](/images/algo-2_3.jpeg)
![algo-2_4](/images/algo-2_4.jpeg)

But this chapter is about **which candles we are going to trade**, right?

Let’s start with the **0100** candle:

This candle (from 01:00 to 05:00) is the **London open** candle. Where will the body of this candle form?

- **00:00** Accumulation
- 01:00 - **02:00** Manipulation
- **03:00** Distribution (we trade this candle)
- **04:00** Continuation / Reversal

![algo-2_5](/images/algo-2_5.jpeg)

Next is **0500** candle, this is the **London lunch**, we trade this candle when one of the following three criteria is met:

- The 01:00 candle has reached its target → **Reversal**
- The 01:00 candle has not reached its target → **Continuation**
- There is **news at** 08:30

![algo-2_6](/images/algo-2_6.jpeg)
![algo-2_7](/images/algo-2_7.jpeg)

Let's continue with **New York AM session**, will trade the **0900** candle when:

- There has not been an expansion candle at 01:00 or 05:00.
- The daily DOL has not been reached.
- The daily DOL has been reached, and a reversal scenario is created.

![algo-2_8](/images/algo-2_8.jpeg)
![algo-2_9](/images/algo-2_9.jpeg)

Once we know which candles we are going to trade and how, **where are we going to enter?**

Before getting into this point, you need to watch [Chapter 1](#chapter-1) of the **"Decoding the Algorithm"** series.

As we know, **the algorithm makes a purge making the move.** Extrapolating this to **LTF candles**, where do we enter?

Each new candle aims to take at least the high or low (or attempt to) of the previous candle, so **we will enter at the beginning of new candles.**

![algo-2_10](/images/algo-2_10.jpeg)
![algo-2_11](/images/algo-2_11.jpeg)

So, **when do we enter our trades?**

There is a **grace period** in the algorithm. This refers to the **first 15 minutes** of the new hourly candle and the last candle of the hour.

This way, we enter the trade optimally, **as we enter at the wick** of the PO3 of the new candle.

Backtest it and thank me later.🪄

![algo-2_12](/images/algo-2_12.jpeg)
![algo-2_13](/images/algo-2_13.jpeg)

To conclude...

We wait for a HTF purge of the previous candle and then in the first 15min of the new candle another LTF purge, then we entry.

What happens in swings where the previous candle is not mitigated? Then a **failure swing** is created.

## Chapter 3

In this chapter, I’ll be talking about:

**FAILURE SWINGS**

Why doesn’t the price always take out the previous low or high before making a move? Let’s find out!

🔙Before we begin, you should have watched the **previous two chapters** to understand the context and how the algorithm is programmed to move the price.

If the price always took out the previous candle on every timeframe before each move, it would become too predictable so everyone would make money.

🥷That’s why there are certain **conditions** and **characteristics** that trigger exceptions, leading to the Failure Swing.

![algo-3_1](/images/algo-3_1.jpeg)

⏲️In essence, a **Failure Swing** occurs when the price **fails** to create a new swing before making a move. However, this isn’t always the case; sometimes, a failure swing can appear mid-move, but always keeping in mind what was discussed in Chapter 2 about the **start of the trading hours**.

![algo-3_2](/images/algo-3_2.jpeg)

💡Here’s an example of what a **Failure Swing** looks like visually. In this case, we would keep waiting for the previous high to be taken out, and we’d never get our entry.

In **Image 2**, you can see the **ideal** entry at 02:00 and the **ideal** exit at the new low at 05:00.

![algo-3_3](/images/algo-3_3.jpeg)

Let’s start with the reasons why this happens:

💎**Reason #1: Divergence** with highly **correlated** or **inversely correlated** pairs (like the DXY).

In this example, Pair A does take out the previous **HTF** candle, while Pair B fails to do so.

Therefore, Pair B would be valid for selling because, according to the algorithm, the raid on the previous candle has already been completed, and there’s no need to revisit it.

![algo-3_4](/images/algo-3_4.jpeg)

Here’s a real example showing a **Failure Swing** at the **beginning** of the move and **mid-move**.

**Beginning**: The 03:00 candle fails to mitigate the low of 02:00, while the correlated asset (GU) does. In this case, **GU** is our **trigger**, and we’re clear to buy.

**Mid-move**: The **PO3** of the 04:00 candle in **EU** fails to mitigate the low of the previous candle, while **GU** completes it, making it valid for buying as well.

Our exit for the long would be at the new 4H or 6H candle, around the new **high** at 05:00.

![algo-3_5](/images/algo-3_5.jpeg)
![algo-3_6](/images/algo-3_6.jpeg)

💎**Reason #2: Purge at the End of the Hour**

If the price created a **raid** on **LTF** in the last 15 minutes of the hour, the algorithm validates this raid. The new hourly candle will **fail** to attempt the raid again (since it’s already been done). Our entry would be on the new candle, after the LTF raid, as we need confirmation that it won’t be revisited.

![algo-3_7](/images/algo-3_7.jpeg)

Here’s a real example:

On the **1H** chart, the price fails to create a new high. I imagine it this way on the chart for the following reason:

In the **5-minute** chart, we see the high occurred exactly at 02:55, the last candle of the 02:00 hour. The algorithm validates this raid, so it doesn’t need to revisit it. The entry is at the 03:05 candle, and the exit is, as usual, at the new candle at 05:00.

![algo-3_8](/images/algo-3_8.jpeg)

Another example, same process: The 03:00 candle fails to create a new high. We check the LTF to see what time this occurred, and surprise, it was again at 02:55. Our entry is at the 03:05 candle, and the exit is at the low of 05:00.
Here, we also have extra confirmation, **GU** did take out the high of the 02:00 candle, giving us two confluences that indicate the price is about to start a **bearish** move.

![algo-3_9](/images/algo-3_9.jpeg)

💎**Reason #3: Price Attempts to Make the High or Low at the Beginning of the Hour**

In the first **15 minutes** of the new hourly candle, the price tries to attack the previous **high** or **low** and **fails**. When it fails, the algorithm validates the raid of the previous candle.

Adding **divergence** to this reasoning strengthens the argument.

![algo-3_10](/images/algo-3_10.jpeg)

Let’s look at a real example:

On the **1H** chart, **EU** fails to create a new high at 08:00.
When we look at the **5-minute** chart, we see that at the beginning of the hour (08:05), the price attempts to create the new high but fails, this **is validated**.

In this case, **GU** followed the correct procedure, so we add strength to our argument with **divergence**.

![algo-3_11](/images/algo-3_11.jpeg)

Another example:

Now we’re at the **London lunch**. At the 05:00 candle, the price takes out the high of the 01:00 candle. When we check the LTF, we see that at the start of the new hourly candle at 06:00, the price tries to make a new high, taking out the high of the 05:00 candle but **fails**.

Entry would be on the next candle, after rejecting the high, with our exit at the new **4H** candle at 09:00.

![algo-3_12](/images/algo-3_12.jpeg)

The main reasons why the price fails to mitigate the previous high or low before making a move are:

· **Divergence** with a correlated or inversely correlated pair

· The **last candle of the hour** completes the LTF raid

· The **first 15 minutes** of the new candle attempts to attack the previous candle but **fails**.
