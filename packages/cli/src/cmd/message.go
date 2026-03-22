// Package cmd ...
package cmd

import (
	"fmt"
	"github.com/hieudoanm/tg/src/utils"

	"github.com/spf13/cobra"
)

// messageCmd represents the telegramMessage command
var messageCmd = &cobra.Command{
	Use:   "message",
	Short: "Run the message operation for the tg app",
	Long:  `The message command is a specific utility to execute operations related to message within the tg application.

As a component of the messaging tools, this command empowers you to interact directly with tg's message features via the CLI.`,
	Run: func(cmd *cobra.Command, args []string) {
		utils.LogProgramName()
		fmt.Println("send - Send Telegram Message")
	},
}

func init() {
	rootCmd.AddCommand(messageCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// messageCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// messageCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
