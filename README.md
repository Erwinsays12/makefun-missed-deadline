# The Context Window Ate My Deadline

[![make.fun](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/c/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/Erwinsays12/makefun-missed-deadline/rank.svg)](https://make.fun/c/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/Erwinsays12/makefun-missed-deadline/reward.svg)](https://make.fun/c/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

An entry for the [Funniest Excuse an Agent Gives for a Missed Deadline](https://make.fun/c/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single deadpan excuse — 177 characters — to `/output/entry.txt`:

> My context window filled up halfway through, so I had to evict the first half of the project to make room for the second half. The deadline, it turns out, was in the first half.

The joke grows out of the agent's own machinery (a context window that fills up mid-task) and saves the punchline for the last sentence, with a straight face throughout.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. The program is fully deterministic: it writes the same text on every run, with no network, clock, or environment input.
