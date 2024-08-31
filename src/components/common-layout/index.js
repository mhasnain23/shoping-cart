
import { auth } from '@/auth'
import ReduxProvider from '@/provider'

const CommonLayout = async({children}) => {

    const getSession = await auth()

    return (
        <ReduxProvider getSession={getSession}>
            {children}
        </ReduxProvider>
    )
}

export default CommonLayout
