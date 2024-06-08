// a string "abcEnglishdef"

import { describe, expect, it } from "vitest";
import { wordExist } from "./src/wordExist";

describe('Word exist or not', () => {

    it ('Word english exist, should return true', () => {
        // Acceptance Criteria
        // Given
        const sentence = 'abcEnglishdef'
        const word = 'english'
        const expected = true
        // When - Action
        const result = wordExist(sentence, word)
        // Then
        expect (result).toBeTypeOf('boolean')
        expect (result).toEqual(expected)
    })
})

it('Word spanish exist, should return true', () => {
    // Acceptance Criteria
    // Given
    const sentence = 'abcSpanishdef'
    const word = "spanish"
    const expected = true
    // When - Action
    const result = wordExist(sentence, word)
    // Then
    expect (result).toBeTypeOf("boolean")
    expect (result).toEqual(expected)
})

it('word french does not exist, should return false', () => {
    // Acceptance Criteria
    // Given
    const sentence = 'abcSpanishdef'
    const word = "french"
    const expected = false
    // When - Action
    const result = wordExist(sentence, word)
    // Then
    expect (result).toBeTypeOf("boolean")
    expect (result).toEqual(expected)
})

