import Intro from '../components/Intro'
import Counter from '../components/Counter'

const Index: React.FC = () => {
  return (
    <div>
      <Intro />
      <Counter initialCount={26} />
    </div>
  )
}
export default Index
