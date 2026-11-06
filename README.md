# LexiFind — Smart Autocomplete and Typo Correction

A dependency-free browser mini-project demonstrating a **Trie** for live prefix completion and **Levenshtein edit-distance DP** for spelling correction. Suggestions are ranked by frequency.

## Run

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`. Run tests with `npm test`.

## Complexity

- Trie insertion: `O(L)` per word
- Prefix lookup: `O(m + k)` where `m` is prefix length and `k` is collected subtree size
- Edit distance: `O(ab)` time and `O(b)` space per candidate
