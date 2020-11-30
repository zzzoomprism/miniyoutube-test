import chai from "chai";
import {getVideoData} from "../src/api/api";

const assert = chai.assert;

describe('src/api.ts file tests', () => {
  it('should get all data from data.json file', () => {
    const jsonData = getVideoData();
    assert.isArray(jsonData)
    assert.isOk(jsonData, 'json data is not undefined')
    assert.isNotNull(jsonData, 'json data is not null');
  })
})
