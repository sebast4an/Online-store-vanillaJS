export const loginComponent = `
        <section class="loginpanel"> 
            <section class="loginpanel__sing-up">
                <header class="loginpanel__header header__bottomline">
                    <h2 class="loginpanel__header--title header__bottomline--title">Sign up</h2>
                </header>
                <form class="loginpanel__form">
                    <label class="loginpanel__label" for="loginpanel__sing-up--login">Email:</label>
                    <input class="loginpanel__input loginpanel__sing-up--login" type="text">
                    <label class="loginpanel__label" for="loginpanel__sing-up--password">Password:</label>
                    <input class="loginpanel__input loginpanel__sing-up--password" type="password">
                </form>
            </section>
            <section class="loginpanel__sing-in">
            <header class="loginpanel__header header__bottomline">
                <h2 class="loginpanel__header--title header__bottomline--title">Sign in</h2>
            </header>
            <form class="loginpanel__form">
                <label class="loginpanel__label" for="loginpanel__sing-in--login">Email:</label>
                <input class="loginpanel__input loginpanel__sing-in--login" type="text">
                <label class="loginpanel__label" for="loginpanel__sing-in--password">Password:</label>
                <input class="loginpanel__input loginpanel__sing-in--password" type="password">
            </form>
        </section>
        </section>
`;

export const loginLoader = () => {};
