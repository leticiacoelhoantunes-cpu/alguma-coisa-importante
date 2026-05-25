// Sistema de Diagnóstico Agrícola 2026
// Este código roda diretamente no console ou como um alerta no navegador

// 1. Definição de constantes técnicas
const LIMITE_PRAGAS = 5; // Média de pragas por planta

// 2. Entrada de dados com tratamento de erro
let entrada = prompt("Digite a quantidade de pragas encontradas por planta:");

// Convertendo o texto digitado para número decimal
let quantidadePragas = parseFloat(entrada);

// 3. Verificação de erros (Se o usuário digitou letras ou deixou vazio)
if (isNaN(quantidadePragas) || quantidadePragas < 0) {
    alert("ERRO: Por favor, digite um número válido e positivo.");
} else {
    // 4. Lógica de decisão (O coração do programa)
    let mensagem;

    if (quantidadePragas === 0) {
        mensagem = "🌱 Equilíbrio perfeito! Continue monitorando semanalmente.";
    } else if (quantidadePragas <= LIMITE_PRAGAS) {
        mensagem = "✅ Nível SEGURO. Recomenda-se apenas controle biológico (insetos predadores).";
    } else {
        mensagem = "⚠️ ALERTA: Nível crítico de dano econômico! Procure um engenheiro agrônomo.";
    }

    // 5. Saída do resultado
    alert("RESULTADO DA ANÁLISE:\n" + mensagem);
    console.log("Monitoramento finalizado para: " + quantidadePragas + " pragas.");
}