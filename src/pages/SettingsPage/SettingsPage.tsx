import { Settings } from "../../components/Settings/Settings";

type SettingsPageProps = {
  className?: string;
}

function SettingsPage({ className }: SettingsPageProps) {
    return (
      <div className='app'>
        <Settings />
      </div>
    )
  }

  export default SettingsPage;