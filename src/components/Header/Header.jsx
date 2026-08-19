import { SettingButton } from "./SettingButton"

export const Header = () => {
    return (
        <div className="flex items-center justify-between">
            <h1>Cozy Focus</h1>

            <SettingButton />
        </div>
    )
}