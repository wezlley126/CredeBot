import {useState} from 'react';
import axion from 'axion';
import Form from './botFrontend/form.js'
import ExibirAniversariantes from './botFrontend/viewAniver.js'

export default function app() {
  return(
    <>
      <Form />
      <ExibirAniversariantes />
    </>
  )
}