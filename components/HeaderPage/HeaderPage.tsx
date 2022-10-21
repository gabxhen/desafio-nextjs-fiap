import React from 'react'
import styles from '../../styles/Home.module.css';
import styled from '@emotion/styled';

const HeaderPageContainer = styled.div`
`

type HeaderPageProps = {
    contentTitle : string;
    contentSubTitle : string;
}

export default function HeaderPage(props:HeaderPageProps) {
  return (
    <HeaderPageContainer>
        <h1 className={styles.title}>
            {props.contentTitle}
        </h1>

        <p className={styles.description}>
            {props.contentSubTitle}
        </p>
    </HeaderPageContainer>
  )
}
