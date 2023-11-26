import './toggle.css'
import {ThemeContext } from '../Theme/ThemeContext';
import { useContext } from 'react';
const Toggle = () => {
    const {changeTheme} = useContext(ThemeContext);
    return (
        <div>
        <label for="theme" class="theme">
	    <span>Light</span>
	    <span class="theme__toggle-wrap">
		<input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" onClick={() => changeTheme()}/>
		<span class="theme__fill"></span>
		<span class="theme__icon">
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
		</span>
	</span>
	<span>Dark</span>
</label>
</div>
      );
}

export default Toggle