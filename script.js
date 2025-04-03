body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
}
.calculator {
    background: black;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}
input {
    width: 100%;
    height: 50px;
    text-align: right;
    font-size: 1.5em;
    margin-bottom: 10px;
}
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}
button {
    padding: 15px;
    font-size: 1.2em;
    cursor: pointer;
}
