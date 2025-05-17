import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import langJson from "../i18n/index.json"

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1
      
      One test is done for you as an example.
    */
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText("Create an Account")).toBeVisible()
    })
    test(`${langJson.en.TEXT_FAV_LANG_JS} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_FAV_LANG_JS}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_FAV_LANG_RUST} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_FAV_LANG_RUST}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_OPT_FAV_FOOD_1} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_OPT_FAV_FOOD_1}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_OPT_FAV_FOOD_2} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_OPT_FAV_FOOD_2}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_OPT_FAV_FOOD_3} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_OPT_FAV_FOOD_3}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_OPT_FAV_FOOD_4} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_OPT_FAV_FOOD_4}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_SUBMIT} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_SUBMIT}`)).toBeVisible()
    })
    test(`${langJson.en.TEXT_FAV_LANG} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByText(`${langJson.en.TEXT_FAV_LANG}`)).toBeVisible()
    })
    test(`${langJson.en.LABEL_USERNAME} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(`${langJson.en.LABEL_USERNAME}`)).toBeVisible()
    })
    test(`${langJson.en.LABEL_FAV_FOOD} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(`${langJson.en.LABEL_FAV_FOOD}`)).toBeVisible()
    })
    test(`${langJson.en.LABEL_ACCEPT_TERMS} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByLabelText(`${langJson.en.LABEL_ACCEPT_TERMS}`)).toBeVisible()
    })
    test(`${langJson.en.PLACEHOLDER_USERNAME} is visible`, () => {
      render(<App lang="en" />)
      expect(screen.getByPlaceholderText(`${langJson.en.PLACEHOLDER_USERNAME}`)).toBeVisible()
    })
  })
  describe('Spanish Language', () => {

     test(`${langJson.esp.TEXT_HEADING_CREATE_ACCOUNT} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_HEADING_CREATE_ACCOUNT}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_FAV_LANG_JS} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_FAV_LANG_JS}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_FAV_LANG_RUST} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_FAV_LANG_RUST}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_OPT_FAV_FOOD_1} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_OPT_FAV_FOOD_1}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_OPT_FAV_FOOD_2} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_OPT_FAV_FOOD_2}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_OPT_FAV_FOOD_3} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_OPT_FAV_FOOD_3}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_OPT_FAV_FOOD_4} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_OPT_FAV_FOOD_4}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_SUBMIT} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_SUBMIT}`)).toBeVisible()
    })
    test(`${langJson.esp.TEXT_FAV_LANG} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByText(`${langJson.esp.TEXT_FAV_LANG}`)).toBeVisible()
    })
    test(`${langJson.esp.LABEL_USERNAME} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByLabelText(`${langJson.esp.LABEL_USERNAME}`)).toBeVisible()
    })
    test(`${langJson.esp.LABEL_FAV_FOOD} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByLabelText(`${langJson.esp.LABEL_FAV_FOOD}`)).toBeVisible()
    })
    test(`${langJson.esp.LABEL_ACCEPT_TERMS} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByLabelText(`${langJson.esp.LABEL_ACCEPT_TERMS}`)).toBeVisible()
    })
    test(`${langJson.esp.PLACEHOLDER_USERNAME} is visible`, () => {
      render(<App lang="us" />)
      expect(screen.getByPlaceholderText(`${langJson.esp.PLACEHOLDER_USERNAME}`)).toBeVisible()
    })
  })
    /*
      👉 TASK 3

      This is done after making the UI multilingual.
    */
  })
    describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {

   const obj = {
    abc_1: "data_abc_1",
    abc_2: "data_abc_2",
    xyz_1: "data_xyz_1",
    abc_3: "data_abc_3",
   }

   const expected = [
    ["abc_1", "data_abc_1"],
    ["abc_2", "data_abc_2"],
    ["abc_3", "data_abc_3"],
  ]

  const expected2 = [
    ["xyz_1", "data_xyz_1"],
  ]

  expect(getEntriesByKeyPrefix(obj, 'abc')).toEqual(expected)
  expect(getEntriesByKeyPrefix(obj, 'xyz')).toEqual(expected2)
  expect(getEntriesByKeyPrefix(obj, 'foo')).toEqual([])
    })
  })


//FUNCTION
function getEntriesByKeyPrefix(obj, keyPrefix) {
  return Object.entries(obj).filter(([key]) => key.split('_')[0] === keyPrefix)
}

  /*
    👉 TASK 4 part 1

    Implement a function that takes as first argument an object `obj` such as this:

    {
      abc_1: "data_abc_1",
      abc_2: "data_abc_2",
      xyz_1: "data_xyz_1",
      abc_3: "data_abc_3",
    }

    and takes as second argument a string `keyPrefix` such as this: "abc"

    and returns an array of arrays such as this (for the arguments given in the examples above):

    [
      ["abc_1", "data_abc_1"],
      ["abc_2", "data_abc_2"],
      ["abc_3", "data_abc_3"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "xyz" then it would return:

    [
      ["xyz_1", "data_xyz_1"],
    ]

    If the function is passed the same `obj` as above but a `keyPrefix` of "foo" then it would return the empty array.

    The function looks inside the object `obj`, finds all properties whose property names begin
    with the `keyPrefix` given (followed by an underscore), and reorganizes the information before returning it.
    The properties that match the `keyPrefix` are returned inside an array holding key-value-pair sub-arrays.

  */

