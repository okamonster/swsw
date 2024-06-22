import styles from './style.module.css'

import { useSerialCode } from '~/features/adminUser/profile/hooks/useSerialCode'
import { useSteps } from '~/features/adminUser/profile/hooks/useSteps'
import { SerialCodeForm } from '~/features/adminUser/profile/components/SerialCodeForm'
import { ProfileForm } from '~/features/adminUser/profile/components/ProfileForm'

export const RegisterContainer = (): React.ReactNode => {
  const { currentStep, next } = useSteps()
  const { profileOptionValues, confirmSerialCode } = useSerialCode()

  return (
    <div className={styles.registerContainer}>
      <h1 className={styles.title}>プロフィール登録</h1>
      {currentStep === 1 && (
        <SerialCodeForm next={next} confirmSerialCode={confirmSerialCode} />
      )}
      {currentStep === 2 && profileOptionValues && (
        <ProfileForm defaultValues={profileOptionValues} />
      )}
    </div>
  )
}
