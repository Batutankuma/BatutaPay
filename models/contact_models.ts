export type EmailModel = {
    email: string;
    id: string;
    isPrimary: number;
    label: string;
    type: string;
};

export type ImageModel = {
    uri: string;
};

export type InstantMessageAddressModel = {
    id: string;
    isPrimary: number;
    label: string;
    service: string;
    username: string;
};

export type PhoneNumberModel = {
    id: string;
    isPrimary: number;
    label: string;
    number: string;
    type: string;
};

export type UrlAddressModel = {
    id: string;
    isPrimary: number;
    label: string;
    url: string;
};

export type ContactModel = {
    contactType: string;
    emails: EmailModel[];
    firstName: string;
    id: string;
    image: ImageModel;
    imageAvailable: boolean;
    instantMessageAddresses: InstantMessageAddressModel[];
    lastName: string;
    lookupKey: string;
    middleName: string;
    name: string;
    note: string;
    phoneNumbers: PhoneNumberModel[];
    urlAddresses: UrlAddressModel[];
};
export function getArrayContact(data: any[]): ContactModel[] {
    if (!data || !Array.isArray(data)) {
        // Si data est undefined ou n'est pas un tableau, retournez un tableau vide
        return [];
    }

    const contacts = data
        .map((value): ContactModel | undefined => {
            // Créer un objet ContactModel uniquement si au moins un numéro de téléphone est défini
            const hasPhoneNumber = (value.phoneNumbers || []).some((phone: any) => !!phone.number);

            if (hasPhoneNumber) {
                return {
                    contactType: value.contactType || "",
                    emails: (value.emails || []).map((email: any): EmailModel => ({
                        email: email?.email || "",
                        id: email?.id || "",
                        isPrimary: email?.isPrimary || 0,
                        label: email?.label || "",
                        type: email?.type || ""
                    })),
                    firstName: value.firstName || "",
                    id: value.id || "",
                    image: {
                        uri: value.image?.uri || ""
                    },
                    imageAvailable: !!value.imageAvailable,
                    instantMessageAddresses: (value.instantMessageAddresses || []).map((ima: any): InstantMessageAddressModel => ({
                        id: ima?.id || "",
                        isPrimary: ima?.isPrimary || 0,
                        label: ima?.label || "",
                        service: ima?.service || "",
                        username: ima?.username || ""
                    })),
                    lastName: value.lastName || "",
                    lookupKey: value.lookupKey || "",
                    middleName: value.middleName || "",
                    name: value.name || "",
                    note: value.note || "",
                    phoneNumbers: (value.phoneNumbers || [])
                        .filter((phone: any) => !!phone.number) // Filtrer les numéros de téléphone définis
                        .map((phone: any): PhoneNumberModel => ({
                            id: phone?.id || "",
                            isPrimary: phone?.isPrimary || 0,
                            label: phone?.label || "",
                            number: phone?.number || "",
                            type: phone?.type || ""
                        })),
                    urlAddresses: (value.urlAddresses || []).map((url: any): UrlAddressModel => ({
                        id: url?.id || "",
                        isPrimary: url?.isPrimary || 0,
                        label: url?.label || "",
                        url: url?.url || ""
                    }))
                };
            }

            return undefined; // Retourner undefined pour les contacts sans numéro de téléphone
        })
        .filter((contact): contact is ContactModel => !!contact); // Filtrer les contacts définis (non-undefined)

    // Trier les contacts par ordre alphabétique basé sur le nom complet (insensible à la casse)
    contacts.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));

    return contacts;
}
