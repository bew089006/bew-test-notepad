import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './index.module.scss'
import { faBars, faFolder } from '@fortawesome/free-solid-svg-icons'

interface IListCards {
  id: string
  title: string
  note: string
  createdAt: string
  updatedAt: string
}

const mockupListCards: IListCards[] = [
  {
    id: '1',
    title: '1UP BOOTCAMP',
    note: 'Day 1',
    createdAt: '',
    updatedAt: '2021-06-22T07:46:34.094Z',
  },
  {
    id: '2',
    title: '1UP BOOTCAMP',
    note: 'Day 2',
    createdAt: '',
    updatedAt: '2021-07-22T07:46:34.094Z',
  },
  {
    id: '3',
    title: '3UP BOOTCAMP',
    note: 'Day 3',
    createdAt: '',
    updatedAt: '2021-08-22T07:46:34.094Z',
  },
  {
    id: '4',
    title: '4UP BOOTCAMP',
    note: 'Day 4',
    createdAt: '',
    updatedAt: '2021-09-22T07:46:34.094Z',
  },
  {
    id: '5',
    title: '5UP BOOTCAMP',
    note: 'Day 5',
    createdAt: '',
    updatedAt: '2021-09-22T07:46:34.094Z',
  },
]

export const Content: React.FC<any> = (props: { data: IListCards }) => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>{props.data.title}</div>
      <div className={styles.detail}>
        <div>{props.data.updatedAt}</div>
        <div className={styles.contentDetail}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className={styles.note}>{props.data.note}</div>
        </div>
      </div>
    </div>
  )
}

const MainPage: React.FC = () => {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <div className={styles.upperBar}>
          <FontAwesomeIcon icon={faBars} width="15px" height="15px" className={styles.icon} />
        </div>
        <div className={styles.tag}>
          <h5>Notes</h5>
        </div>
        {mockupListCards.map((ele: IListCards, index: number) => {
          return <Content key={index} data={ele} />
        })}
      </div>
    </nav>
  )
}

export default MainPage
