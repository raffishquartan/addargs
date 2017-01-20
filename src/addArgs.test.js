/**
 * Created by christo on 20170118.
 *
 * Copyright (C) 2017 Bristlecone Enterprises Ltd
 * All rights reserved
 */
/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */
import { expect } from 'chai';
import sinon from 'sinon';
import { addFirstArg, addSecondArg, addThirdArg, addFourthArg, addFifthArg } from './addArgs';

describe('addArgs package tests', () => {
  it('addFirstArg works', () => {
    const spy = sinon.spy();
    const testee = addFirstArg(spy);
    testee(0, 1, 2, 3, 4, 5);
    expect(spy.calledWith(1, 2, 3, 4, 5)).to.be.true;
  });

  it('addSecondArg works', () => {
    const spy = sinon.spy();
    const testee = addSecondArg(spy);
    testee(0, 1, 2, 3, 4, 5);
    expect(spy.calledWith(0, 2, 3, 4, 5)).to.be.true;
  });

  it('addThirdArg works', () => {
    const spy = sinon.spy();
    const testee = addThirdArg(spy);
    testee(0, 1, 2, 3, 4, 5);
    expect(spy.calledWith(0, 1, 3, 4, 5)).to.be.true;
  });

  it('addFourthArg works', () => {
    const spy = sinon.spy();
    const testee = addFourthArg(spy);
    testee(0, 1, 2, 3, 4, 5);
    expect(spy.calledWith(0, 1, 2, 4, 5)).to.be.true;
  });

  it('addFifthArg works', () => {
    const spy = sinon.spy();
    const testee = addFifthArg(spy);
    testee(0, 1, 2, 3, 4, 5);
    expect(spy.calledWith(0, 1, 2, 3, 5)).to.be.true;
  });
});
