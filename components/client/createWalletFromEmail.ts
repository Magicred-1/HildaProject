'use server';

const createEmbeddedWalletFromEmail = async (userEmail: string) => {
    const DYNAMIC_BEARER_TOKEN = "dyn_wRrgPXn1jlaJOCuY3QHsQfD6MekeJms39c91fUeXCsgMWmvn1h4qbyXY";
    const ENV_KEY = "6d869255-8971-474a-bf98-826918ac83e9";

    if (!DYNAMIC_BEARER_TOKEN) {
        console.error("DYNAMIC_BEARER_TOKEN is not set");
        return false;
    }

    if (!userEmail) {
        console.error("Email is required");
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        console.error("Invalid email address");
        return false;
    }

    console.table({ userEmail });

    const options = {
        method: 'POST',
        headers: { Authorization: `Bearer ${DYNAMIC_BEARER_TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
            identifier: userEmail,
            type: "email",
            chain: "EVM"
        }),
    };

    console.log("Creating embedded wallet...", options);

    try {
        const res = await fetch(`https://app.dynamicauth.com/api/v0/environments/${ENV_KEY}/embeddedWallets`, options);
        const user = await res.json();

        if (!user) {
            console.error("Error creating embedded wallet");
            return false;
        }

        console.log(user);

        return user;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default createEmbeddedWalletFromEmail;
