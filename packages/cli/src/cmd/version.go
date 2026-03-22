package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

// versionCmd represents the version command
var versionCmd = &cobra.Command{
	Use:   "version",
	Short: "Run the version operation for the tg app",
	Long:  `The version command is a specific utility to execute operations related to version within the tg application.

As a component of the messaging tools, this command empowers you to interact directly with tg's version features via the CLI.`,
	Run: func(cmd *cobra.Command, args []string) {
		var version = "v0.0.1"
		fmt.Printf("Telegram CLI version: %s\n", version)
	},
}

func init() {
	rootCmd.AddCommand(versionCmd)
}
