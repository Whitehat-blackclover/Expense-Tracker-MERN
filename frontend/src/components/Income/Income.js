import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/GlobalContext';
import Form from '../Form/Form';

function Income() {
    const {addInocme} = useGlobalContext()
  return (
    <IncomeStyled>
        <InnerLayout>
            <h1>Income</h1>
            <div className='income-content'>
                <div className='form-container'>
                  <Form></Form>
                </div>
                <div className='incomes'>

                </div>
            </div>
        </InnerLayout>
    </IncomeStyled>
  )
}

const IncomeStyled = styled.div`

`;

export default Income