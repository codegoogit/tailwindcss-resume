import {Section} from './Section'
import {SectionTitle} from './SectionTitle'

export const InfoSection = props => {
  return (
    <Section>
      <SectionTitle color="red">
        Info
      </SectionTitle>

      <div className="py-2">
        <div className="font-bold">
          Address
        </div>
        <div className="text-gray-400">
          <div>20 Kimlin Court,</div>
          <div>Poughkeepsie, 12603, United States</div>
        </div>
      </div>


      <div className="py-2">
        <div className="font-bold">
          Phone
            </div>
        <div className="text-gray-400">
          <div>(000) 000-0000
              </div>
        </div>

        <div className="py-2">
          <div className="font-bold">
            Email
              </div>
          <div className="text-gray-400">
            abcde@gmail.com
              </div>
        </div>

      </div>
    </Section>
  )
}