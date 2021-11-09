1) Чекбокс

const [checkboxActive, setCheckboxActive] = useState<boolean>(false)

<Checkbox
    active={checkboxActive}
    setActive={setCheckboxActive}

    color='#E0486C'  // необязательный параметр
    margin='0'       // необязательный параметр
/>


2) Радиокнопка

const [activeRadio, setActiveRadio] = useState<string | number>(1)

<div style={{ marginBottom: 30 }}>
    <Radio
        id={1}
        active={activeRadio}
        setActive={setActiveRadio}

        margin='0 0 10px 0'         // необязательный параметр
        color='#E0486C'             // необязательный параметр
    />
    <Radio
        id={2}
        active={activeRadio}
        setActive={setActiveRadio}

        margin='0 0 10px 0'         // необязательный параметр
        color='#E0486C'             // необязательный параметр
    />
</div>

3) Dropdown

