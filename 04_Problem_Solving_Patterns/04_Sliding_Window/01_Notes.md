# Sliding Window

This pattern involves creating a window which can be an **_ARRAY_** or a number from one position to another

Depending on the conditions, the window either increases or closes (and a new window is created)

Useful for keeping track of a specific subset of data within an array or string

## Why use Sliding Window:

Imagine you're analyzing daily temperature data to find the hottest stretch of consecutive days over a given period.

Let's say you have a list of temperatures recorded over several weeks, and you're interested in finding the hottest 7-day period.

By using the sliding window technique implemented in this function, you can efficiently calculate the sum of temperatures for each 7-day window and find the maximum sum (which corresponds to the hottest week).

This would be much faster than calculating the sum from scratch for every possible 7-day span, especially if you have a large dataset like years of weather data.

This approach can be extended to many other fields, such as financial analysis (finding the best period of stock performance), sports statistics (highest scoring streak in games), or even website traffic (finding peak visitor periods).
