import { NextRouter } from 'next/router'

const Actions = (router: NextRouter) => {
  return [
    // LAUNCHES
    {
      id: 'launches',
      name: 'Launches',
      shortcut: ['l'],
      keywords: 'launches main rocket',
      perform: () => router.push('/')
    },
    // MISSIONS
    {
      id: 'missions',
      name: 'Missions',
      shortcut: ['m'],
      keywords: 'missions',
      perform: () => router.push('/missions')
    },
    // ROADSTER
    {
      id: 'roadster',
      name: 'Roadster',
      shortcut: ['r'],
      keywords: 'roadster starman tesla',
      perform: () => router.push('/roadster')
    }
  ]
}

export default Actions
